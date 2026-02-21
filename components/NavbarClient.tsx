
'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import UserMenu from "./UserMenu";
import LanguageSelector from "./LanguageSelector";
import { useTranslations } from 'next-intl';

interface NavbarClientProps {
    user: any;
    profile?: any;
    transparent?: boolean;
}

export default function NavbarClient({ user, profile, transparent = false }: NavbarClientProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations('nav');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: t('ecosystem'), href: "/#divisions" },
        { name: t('journal'), href: "/blog" },
        { name: t('spark'), href: "/spark" },
        { name: t('contact'), href: "/#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${transparent && !isMenuOpen
                ? "bg-transparent"
                : "bg-background border-b border-border shadow-md"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-bold text-foreground hover:text-primary transition-colors flex-shrink-0">
                        Mykibo
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-foreground hover:text-primary transition-colors font-semibold"
                            >
                                {link.name}
                            </a>
                        ))}
                        <LanguageSelector />
                        <UserMenu user={user} profile={profile} />
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex md:hidden items-center gap-4">
                        <LanguageSelector />
                        <UserMenu user={user} profile={profile} />
                        <button
                            onClick={toggleMenu}
                            className="text-foreground p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in-up">
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xl font-bold text-foreground hover:text-primary transition-colors border-b border-border/10 pb-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
