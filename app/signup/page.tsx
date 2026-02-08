
import { signup } from '../login/actions'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function SignupPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-6 mt-20">
                <div className="w-full max-w-md p-8 kibo-card border-primary/20">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                        <p className="text-muted-foreground">Join the Kibo ecosystem</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="full_name" className="block text-sm font-medium mb-1">Full Name</label>
                            <input
                                id="full_name"
                                name="full_name"
                                type="text"
                                required
                                className="w-full p-2 rounded-md bg-[#1B4034] border border-border focus:border-primary outline-none transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full p-2 rounded-md bg-[#1B4034] border border-border focus:border-primary outline-none transition-colors"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full p-2 rounded-md bg-[#1B4034] border border-border focus:border-primary outline-none transition-colors"
                                placeholder="Min 6 characters"
                                minLength={6}
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                formAction={signup}
                                className="w-full kibo-button-primary justify-center"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <p className="text-muted-foreground">
                            Already have an account?{' '}
                            <Link href="/login" className="text-primary hover:underline font-medium">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
