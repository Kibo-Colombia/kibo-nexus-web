import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DivisionCard from "@/components/DivisionCard";
import { Eye, Wrench, Rocket, Compass, Target, Heart, Zap } from "lucide-react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    return (
        <main className="min-h-screen">
            <Navbar transparent />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
                    <div className="flex-1 text-center md:text-left animate-fade-in-up">
                        <h1 className="section-title mb-6 leading-tight">
                            {t('hero.title_1')} <span className="text-gradient">{t('hero.title_highlight_1')}</span>.<br />
                            {t('hero.title_2')} <span className="text-gradient">{t('hero.title_highlight_2')}</span>.
                        </h1>
                        <p className="section-subtitle mb-8 max-w-2xl mx-auto md:mx-0 font-medium">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center animate-fade-in-up animate-delay-1 mb-12">
                            <a href="#vision" className="kibo-button-primary">
                                {t('hero.cta_vision')}
                            </a>
                            <a href="#cycle" className="kibo-button-outline">
                                {t('hero.cta_cycle')}
                            </a>
                        </div>
                    </div>

                    {/* Mascot Illustration */}
                    <div className="flex-1 flex justify-center items-center animate-fade-in-up animate-delay-2">
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary scale-90" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
                            <Image
                                src="/pets/kibo.png"
                                alt={t('hero.mascot_alt')}
                                width={450}
                                height={450}
                                className="relative z-10 object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section id="vision" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-center mb-4 animate-fade-in-up">
                        {t('essence.title_prefix')} <span className="text-gradient">{t('essence.title_highlight')}</span>
                    </h2>
                    <p className="section-subtitle text-center mb-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-1">
                        {t('essence.subtitle')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="kibo-card animate-fade-in-up animate-delay-2 border-primary">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                    <Compass className="text-kibo-dark" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-primary">{t('essence.vision_title')}</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3 opacity-70">{t('essence.vision_label')}</p>
                                    <p className="text-foreground leading-relaxed">
                                        {t('essence.vision_text')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="kibo-card animate-fade-in-up animate-delay-3 border-primary">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                    <Target className="text-kibo-dark" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-primary">{t('essence.mission_title')}</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3 opacity-70">{t('essence.mission_label')}</p>
                                    <p className="text-foreground leading-relaxed">
                                        {t('essence.mission_text')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Virtuous Cycle Section */}
            <section id="cycle" className="py-24 px-6 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-center mb-4 animate-fade-in-up">
                        {t('cycle.title_prefix')} <span className="text-gradient">{t('cycle.title_highlight')}</span>
                    </h2>
                    <p className="section-subtitle text-center mb-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-1">
                        {t('cycle.subtitle')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Expose */}
                        <div className="kibo-card animate-fade-in-up animate-delay-2 border-primary text-center">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                                <Eye className="text-kibo-dark" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary">{t('cycle.expose_title')}</h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 opacity-70">{t('cycle.expose_label')}</p>
                            <p className="text-foreground leading-relaxed">
                                {t('cycle.expose_text')}
                            </p>
                        </div>

                        {/* Enable */}
                        <div className="kibo-card animate-fade-in-up animate-delay-3 border-primary text-center">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                                <Wrench className="text-kibo-dark" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary">{t('cycle.enable_title')}</h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 opacity-70">{t('cycle.enable_label')}</p>
                            <p className="text-foreground leading-relaxed">
                                {t('cycle.enable_text')}
                            </p>
                        </div>

                        {/* Empower */}
                        <div className="kibo-card animate-fade-in-up animate-delay-4 border-primary text-center">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                                <Rocket className="text-kibo-dark" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary">{t('cycle.empower_title')}</h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 opacity-70">{t('cycle.empower_label')}</p>
                            <p className="text-foreground leading-relaxed">
                                {t('cycle.empower_text')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section id="philosophy" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-center mb-4 animate-fade-in-up">
                        {t('values.title_prefix')} <span className="text-gradient">{t('values.title_highlight')}</span>
                    </h2>
                    <p className="section-subtitle text-center mb-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-1">
                        {t('values.subtitle')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="kibo-card animate-fade-in-up animate-delay-2 border-primary">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                    <Heart className="text-kibo-dark" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-primary">{t('values.collective_title')}</h3>
                                    <p className="text-foreground leading-relaxed">{t('values.collective_text')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="kibo-card animate-fade-in-up animate-delay-3 border-primary">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                    <Target className="text-kibo-dark" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-primary">{t('values.clarity_title')}</h3>
                                    <p className="text-foreground leading-relaxed">{t('values.clarity_text')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="kibo-card animate-fade-in-up animate-delay-4 border-primary">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                    <Zap className="text-kibo-dark" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-primary">{t('values.sustainability_title')}</h3>
                                    <p className="text-foreground leading-relaxed">{t('values.sustainability_text')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="kibo-card animate-fade-in-up animate-delay-4 border-primary">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                    <Rocket className="text-kibo-dark" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-primary">{t('values.impact_title')}</h3>
                                    <p className="text-foreground leading-relaxed">{t('values.impact_text')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divisions Section */}
            <section id="divisions" className="py-24 px-6 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <h2 className="section-title text-center mb-4 animate-fade-in-up">
                        {t('divisions.title_prefix')} <span className="text-gradient">{t('divisions.title_highlight')}</span>
                    </h2>
                    <p className="section-subtitle text-center mb-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-1">
                        {t('divisions.subtitle')}
                    </p>
                    <DivisionCard />
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="kibo-card border-2 border-primary p-12">
                        <h2 className="section-title mb-4">
                            {t('cta.title_prefix')} <span className="text-gradient">{t('cta.title_highlight')}</span>
                        </h2>
                        <p className="section-subtitle mb-8">
                            {t('cta.subtitle')}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://cfo.mykibo.site"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="kibo-button-primary"
                            >
                                {t('cta.explore_cfo')}
                            </a>
                            <a
                                href="mailto:mykibocolombia@gmail.com"
                                className="kibo-button-outline"
                            >
                                {t('cta.contact_us')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
