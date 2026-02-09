
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Navbar from '@/components/Navbar'
import ProfileForm from '@/components/ProfileForm'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default async function SettingsPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Fetch profile data
    let profile: any = null
    try {
        const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single()
        profile = data
    } catch (error) {
        console.error('Error fetching profile:', error)
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-12">
                <div className="mb-8">
                    <Link href="/my-kibo" className="flex items-center text-primary hover:underline gap-2 mb-4">
                        <ArrowLeft size={20} />
                        Back to Profile
                    </Link>
                    <header className="animate-fade-in-up">
                        <h1 className="section-title mb-2">Profile Settings</h1>
                        <p className="section-subtitle max-w-2xl opacity-90">
                            Update your personal information and profile picture.
                        </p>
                    </header>
                </div>

                <div className="kibo-card border-primary animate-fade-in-up animate-delay-1">
                    <ProfileForm user={user} profile={profile} />
                </div>
            </div>
        </div>
    )
}
