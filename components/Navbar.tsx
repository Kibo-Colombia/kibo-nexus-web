"use client";

interface NavbarProps {
    transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 ${transparent ? "bg-transparent" : "bg-background border-b border-border"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl font-bold">
                            <span className="text-gradient">Kibo</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="/#philosophy"
                            className="text-foreground hover:text-primary transition-colors font-semibold"
                        >
                            Manifesto
                        </a>
                        <a
                            href="/#divisions"
                            className="text-foreground hover:text-primary transition-colors font-semibold"
                        >
                            Ecosystem
                        </a>
                        <a
                            href="/blog"
                            className="text-foreground hover:text-primary transition-colors font-semibold"
                        >
                            Journal
                        </a>
                        <a
                            href="/spark"
                            className="text-foreground hover:text-primary transition-colors font-semibold flex items-center gap-1"
                        >
                            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Spark</span>
                        </a>
                        <a
                            href="/#contact"
                            className="kibo-button-outline text-sm"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
