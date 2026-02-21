
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { defaultLocale } from '@/i18n/config'

export async function signOut() {
    const supabase = await createClient()
    await supabase.auth.signOut()

    revalidatePath('/', 'layout')
    redirect('/login')
}

export async function updateProfile(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return { error: 'Not authenticated' }
    }

    const firstName = formData.get('first_name') as string
    const lastName = formData.get('last_name') as string
    const displayName = formData.get('display_name') as string
    const avatarUrl = formData.get('avatar_url') as string

    const fullName = `${firstName} ${lastName}`.trim()

    const updates: any = {
        updated_at: new Date().toISOString(),
    }

    if (firstName || lastName) updates.full_name = fullName
    if (displayName) updates.display_name = displayName
    if (avatarUrl) updates.avatar_url = avatarUrl

    const { error } = await supabase
        .from('profiles')
        .upsert({
            id: user.id,
            ...updates,
        })

    if (error) {
        console.error('Error updating profile:', error)
        return { error: error.message }
    }

    revalidatePath('/', 'layout')
    return { success: true }
}

export async function updatePreferredLocale(locale: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return // Not logged in — cookie-only persistence is fine
    }

    await supabase
        .from('profiles')
        .update({
            preferred_locale: locale,
            updated_at: new Date().toISOString(),
        })
        .eq('id', user.id)
}

export async function login(formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { data: authData, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        redirect('/login?error=Invalid%20credentials')
    }

    // Read user's preferred locale from their profile and set cookie
    let userLocale = defaultLocale
    if (authData.user) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('preferred_locale')
            .eq('id', authData.user.id)
            .single() as { data: { preferred_locale: string | null } | null }

        if (profile?.preferred_locale) {
            userLocale = profile.preferred_locale as typeof defaultLocale
        }
    }

    const cookieStore = await cookies()
    cookieStore.set('NEXT_LOCALE', userLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
    })

    revalidatePath('/', 'layout')
    redirect(`/${userLocale}/my-kibo`)
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const fullName = formData.get('full_name') as string

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
            }
        }
    })

    if (error) {
        redirect(`/signup?error=${error.message}`)
    }

    revalidatePath('/', 'layout')
    redirect('/login?message=Check%20email%20to%20continue%20sign%20in%20process')
}
