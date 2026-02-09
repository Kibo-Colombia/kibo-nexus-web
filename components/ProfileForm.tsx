
'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import AvatarUpload from './AvatarUpload'
import { updateProfile } from '@/app/my-kibo/actions' // Correct import path? Wait, actions.ts is in app/my-kibo/actions.ts

interface ProfileFormProps {
    user: any
    profile: any
}

export default function ProfileForm({ user, profile }: ProfileFormProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState<string | null>(null)
    const [avatarUrl, setAvatarUrl] = useState<string | null>(profile?.avatar_url || user?.user_metadata?.avatar_url)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        setMessage(null)

        const formData = new FormData(event.currentTarget)
        formData.append('avatar_url', avatarUrl || '') // Ensure avatar_url is included if updated via component

        try {
            // We call the server action directly, passing formData
            // Since we are using a client component form submission handler, we can just call the action function
            // However, Next.js server actions are usually passed to form action prop or via useFormState
            // But here we want custom handling (e.g. toast, loading state)
            // So we invoke it like an async function.

            // Note: server actions return plain objects, not Response objects usually
            const result = await updateProfile(formData)

            if (result?.error) {
                setMessage(`Error: ${result.error}`)
            } else {
                setMessage('Profile updated successfully!')
                router.refresh() // Refresh server components to show updated data
            }
        } catch (error) {
            setMessage('An unexpected error occurred.')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const initialFirstName = profile?.full_name ? profile.full_name.split(' ')[0] : (user?.user_metadata?.full_name?.split(' ')[0] || '')
    const initialLastName = profile?.full_name ? profile.full_name.split(' ').slice(1).join(' ') : (user?.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '')
    const initialDisplayName = profile?.display_name || user?.user_metadata?.display_name || ''

    return (
        <div className="space-y-8">
            <div className="flex justify-center">
                <AvatarUpload
                    uid={user.id}
                    url={avatarUrl}
                    size={150}
                    onUpload={(url) => {
                        setAvatarUrl(url)
                        // Optionally auto-save here or just update state
                    }}
                />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2 text-foreground">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            className="w-full p-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-foreground/50 transition-all shadow-none"
                            defaultValue={initialFirstName}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-foreground">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            className="w-full p-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-foreground/50 transition-all shadow-none"
                            defaultValue={initialLastName}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2 text-foreground">Display Name</label>
                    <input
                        type="text"
                        name="display_name"
                        className="w-full p-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder-foreground/50 transition-all shadow-none"
                        defaultValue={initialDisplayName}
                        placeholder="Choose a username"
                    />
                </div>

                {message && (
                    <div className={`p-4 rounded-md text-sm ${message.startsWith('Error') ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                        {message}
                    </div>
                )}

                <div className="pt-4 flex justify-end">
                    <button
                        type="submit"
                        className="kibo-button-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    )
}
