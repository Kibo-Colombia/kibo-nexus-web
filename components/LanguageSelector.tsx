'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import { updatePreferredLocale } from '@/lib/actions';

export default function LanguageSelector() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function switchLocale(newLocale: Locale) {
        // Replace the current locale prefix with the new one
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');

        // Set cookie for persistence
        document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;

        // Save to Supabase profile (no-op if not logged in)
        updatePreferredLocale(newLocale);

        router.push(newPath);
        setIsOpen(false);
    }

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors p-1.5 rounded-md hover:bg-white/5"
                aria-label="Change language"
            >
                <Globe size={18} />
                <span className="text-xs font-bold uppercase">{locale}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-[#1E4332] border border-[#A9D9C7] z-50 animate-fade-in-up">
                    <div className="py-1">
                        {locales.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => switchLocale(loc)}
                                className={`w-full text-left px-4 py-2 text-sm transition-colors ${locale === loc
                                    ? 'text-primary font-bold bg-primary/10'
                                    : 'text-foreground hover:bg-[#A9D9C7] hover:text-[#1E4332]'
                                    }`}
                            >
                                {localeNames[loc]}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
