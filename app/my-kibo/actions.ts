
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signOut() {
    const supabase = createClient()
    await (await supabase).auth.signOut()

    revalidatePath('/', 'layout')
    redirect('/login')
}

export async function updateProfile(formData: FormData) {
    const supabase = createClient()
    const { data: { user } } = await (await supabase).auth.getUser()

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

    const { error } = await (await supabase)
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
