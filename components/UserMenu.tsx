
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { User, LogIn, UserPlus, Settings, LogOut } from 'lucide-react'
import { signOut } from '@/app/actions' // Need to make this action globally available

interface UserMenuProps {
    user: any // Supabase user type
}

export default function UserMenu({ user }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="User Options"
                aria-expanded={isOpen}
            >
                <User className="w-5 h-5" />
            </button>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#1E4332] border border-[#A9D9C7] ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-fade-in-up"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        {user ? (
                            // LOGGED IN STATE
                            <>
                                <div className="px-4 py-3 border-b border-[#A9D9C7]/20">
                                    <p className="text-xs text-[#A9D9C7] font-bold">Signed in as</p>
                                    <p className="text-sm text-foreground truncate">{user.email}</p>
                                </div>

                                <Link
                                    href="/my-kibo"
                                    className="group flex w-full items-center px-4 py-2 text-sm text-foreground hover:bg-[#A9D9C7] hover:text-[#1E4332] transition-colors"
                                >
                                    <Settings className="mr-3 h-4 w-4" aria-hidden="true" />
                                    Settings
                                </Link>

                                <form action={signOut}>
                                    <button
                                        type="submit"
                                        className="group flex w-full items-center px-4 py-2 text-sm text-foreground hover:bg-[#C24656] hover:text-white transition-colors text-left"
                                    >
                                        <LogOut className="mr-3 h-4 w-4" aria-hidden="true" />
                                        Sign out
                                    </button>
                                </form>
                            </>
                        ) : (
                            // LOGGED OUT STATE
                            <>
                                <div className="px-4 py-2 border-b border-[#A9D9C7]/20">
                                    <p className="text-xs text-[#A9D9C7]">Welcome to Kibo</p>
                                </div>
                                <Link
                                    href="/login"
                                    className="group flex w-full items-center px-4 py-2 text-sm text-foreground hover:bg-[#A9D9C7] hover:text-[#1E4332] transition-colors"
                                >
                                    <LogIn className="mr-3 h-4 w-4" aria-hidden="true" />
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    className="group flex w-full items-center px-4 py-2 text-sm text-foreground hover:bg-[#A9D9C7] hover:text-[#1E4332] transition-colors"
                                >
                                    <UserPlus className="mr-3 h-4 w-4" aria-hidden="true" />
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
