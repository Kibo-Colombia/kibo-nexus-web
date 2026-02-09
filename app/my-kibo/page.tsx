
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { signOut } from './actions'
import Navbar from '@/components/Navbar'
import { User, Settings, LogOut } from 'lucide-react'
import ProfileForm from '@/components/ProfileForm'

export default async function MyKiboPage() {
    const supabase = createClient()
    const { data: { user } } = await (await supabase).auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Fetch profile data
    let profile: any = null
    try {
        const { data } = await (await supabase)
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

            <div className="max-w-6xl mx-auto px-6 pt-32 pb-12">
                <header className="mb-12 animate-fade-in-up">
                    <h1 className="section-title mb-2">Mykibo Profile</h1>
                    <p className="section-subtitle max-w-2xl opacity-90">
                        Manage your account and ecosystem access.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar / User Info */}
                    <div className="md:col-span-1 space-y-6 animate-fade-in-up animate-delay-1">
                        <div className="kibo-card relative flex flex-col items-center p-8 text-center border-primary group">
                            <a
                                href="/my-kibo/settings"
                                className="absolute top-4 right-4 text-foreground/30 hover:text-primary transition-colors p-2"
                                title="Edit Profile"
                            >
                                <Settings size={20} />
                            </a>

                            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6 border-2 border-primary overflow-hidden relative">
                                {profile?.avatar_url || user.user_metadata?.avatar_url ? (
                                    <img
                                        src={profile?.avatar_url || user.user_metadata?.avatar_url}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <User className="w-10 h-10 text-primary" />
                                )}
                            </div>
                            <h2 className="text-xl font-bold text-primary mb-1">
                                {profile?.full_name || user.user_metadata?.full_name || 'Kibo User'}
                            </h2>
                            <p className="text-sm text-foreground opacity-80 break-all">{user.email}</p>
                        </div>

                        <div className="kibo-card p-0 overflow-hidden border-primary">
                            <form action={signOut}>
                                <button className="w-full flex items-center gap-3 px-6 py-4 hover:bg-present hover:text-white transition-colors text-left font-bold text-foreground">
                                    <LogOut size={20} />
                                    <span>Sign Out</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-2 space-y-6 animate-fade-in-up animate-delay-2">

                        {/* Apps Section */}
                        <div className="kibo-card border-primary">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                                <span className="text-2xl">❖</span>
                                Connected Apps
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Kibo CFO - Blue (Living) */}
                                <div className="p-6 rounded-xl bg-secondary border border-[#65A1C9] relative overflow-hidden group hover:bg-[#1A3040] transition-colors">
                                    <div className="font-bold mb-2 text-lg text-[#65A1C9]">Mykibo CFO</div>
                                    <p className="text-sm text-foreground opacity-80 mb-4 z-10 relative">Finance & Budgeting</p>
                                    <a href="https://cfo.mykibo.site" target="_blank" className="inline-block text-xs bg-[#65A1C9] text-white font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                                        Launch App
                                    </a>
                                </div>

                                {/* Kibo Nexus - Green (Primary) */}
                                <div className="p-6 rounded-xl bg-secondary border border-primary relative overflow-hidden group hover:bg-[#1E4332] transition-colors">
                                    <div className="font-bold mb-2 text-lg text-primary">Mykibo Nexus</div>
                                    <p className="text-sm text-foreground opacity-80 mb-4 z-10 relative">Digital Campus</p>
                                    <span className="inline-block text-xs bg-primary text-background font-bold px-4 py-2 rounded-full">
                                        You are here
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
