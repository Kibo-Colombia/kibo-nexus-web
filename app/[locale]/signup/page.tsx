
import { signup } from '@/lib/actions'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function SignupPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('signup');

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-6 mt-20">
                <div className="w-full max-w-md p-8 kibo-card border-primary/20">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
                        <p className="text-muted-foreground">{t('subtitle')}</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="full_name" className="block text-sm font-medium mb-1">{t('full_name')}</label>
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
                            <label htmlFor="email" className="block text-sm font-medium mb-1">{t('email')}</label>
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
                            <label htmlFor="password" className="block text-sm font-medium mb-1">{t('password')}</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full p-2 rounded-md bg-[#1B4034] border border-border focus:border-primary outline-none transition-colors"
                                placeholder={t('password_placeholder')}
                                minLength={6}
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                formAction={signup}
                                className="w-full kibo-button-primary justify-center"
                            >
                                {t('submit')}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <p className="text-muted-foreground">
                            {t('has_account')}{' '}
                            <Link href={`/${locale}/login`} className="text-primary hover:underline font-medium">
                                {t('sign_in')}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
