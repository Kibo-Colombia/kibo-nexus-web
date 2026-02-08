
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { signOut } from './actions'
import Navbar from '@/components/Navbar'
import { User, Settings, LogOut } from 'lucide-react'

export default async function MyKiboPage() {
    const supabase = await createClient()

    let user = null
    try {
        const { data, error } = await supabase.auth.getUser()
        if (!error && data?.user) {
            user = data.user
        }
    } catch (e) {
        console.error("Auth check failed:", e)
    }

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
                <header className="mb-12 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-2">My Kibo</h1>
                    <p className="text-muted-foreground">Manage your account and settings across the ecosystem.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar / User Info */}
                    <div className="md:col-span-1 space-y-6 animate-fade-in-up animate-delay-1">
                        <div className="kibo-card border-primary/20 flex flex-col items-center p-6 text-center">
                            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4">
                                <User className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <h2 className="text-xl font-bold">{user.user_metadata?.full_name || 'Kibo User'}</h2>
                            <p className="text-sm text-muted-foreground break-all">{user.email}</p>
                        </div>

                        <div className="kibo-card border-primary/20 p-0 overflow-hidden">
                            <form action={signOut}>
                                <button className="w-full flex items-center gap-3 px-6 py-4 hover:bg-red-500/10 hover:text-red-500 transition-colors text-left">
                                    <LogOut size={20} />
                                    <span>Sign Out</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-2 space-y-6 animate-fade-in-up animate-delay-2">

                        {/* Apps Section */}
                        <div className="kibo-card border-border">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Settings size={20} className="text-primary" />
                                Connected Apps
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors">
                                    <div className="font-bold mb-1">Kibo CFO</div>
                                    <p className="text-xs text-muted-foreground">Finance & Budgeting</p>
                                    <span className="inline-block mt-2 text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full">Active</span>
                                </div>
                                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors">
                                    <div className="font-bold mb-1">Kibo Nexus</div>
                                    <p className="text-xs text-muted-foreground">This Application</p>
                                    <span className="inline-block mt-2 text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full">Current</span>
                                </div>
                            </div>
                        </div>

                        {/* Profile Settings Form (Mock) */}
                        <div className="kibo-card border-border">
                            <h3 className="text-lg font-bold mb-4">Profile Settings</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">First Name</label>
                                        <input type="text" className="w-full p-2 rounded bg-secondary border border-border" defaultValue={user.user_metadata?.full_name?.split(' ')[0]} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Last Name</label>
                                        <input type="text" className="w-full p-2 rounded bg-secondary border border-border" defaultValue={user.user_metadata?.full_name?.split(' ')[1] || ''} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Display Name</label>
                                    <input type="text" className="w-full p-2 rounded bg-secondary border border-border" placeholder="Choose a username" />
                                </div>
                                <div className="pt-2 flex justify-end">
                                    <button type="button" className="kibo-button-primary">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
