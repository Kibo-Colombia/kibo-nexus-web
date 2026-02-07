export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border mt-24">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-gradient mb-4">Kibo</h3>
                        <p className="text-foreground text-sm leading-relaxed font-medium">
                            Engineering hope. Building legacy. From Tokyo to Colombia, for the world.
                        </p>
                    </div>

                    {/* Divisions */}
                    <div>
                        <h4 className="font-bold text-foreground mb-4 text-lg">Divisions</h4>
                        <ul className="space-y-3 text-sm font-semibold">
                            <li>
                                <a
                                    href="https://cfo.mykibo.site"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-saving transition-colors"
                                >
                                    CFO - Finance
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://learn.mykibo.site"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-future transition-colors"
                                >
                                    Dojo - Education
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://studio.mykibo.site"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-accent transition-colors"
                                >
                                    Studio - Media
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://lab.mykibo.site"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-present transition-colors"
                                >
                                    Lab - Innovation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-bold text-foreground mb-4 text-lg">Connect</h4>
                        <ul className="space-y-3 text-sm font-semibold mb-4">
                            <li><a href="#" className="text-foreground hover:text-primary transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="text-foreground hover:text-primary transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="text-foreground hover:text-primary transition-colors">GitHub</a></li>
                        </ul>
                        <a
                            href="mailto:hello@mykibo.site"
                            className="text-primary hover:text-accent transition-colors text-sm font-bold block"
                        >
                            hello@mykibo.site
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border">
                    <p className="text-center text-foreground text-sm font-medium">
                        © 2026 Kibo Colombia S.A.S. Made with 💛💙❤️ and purpose.
                    </p>
                </div>
            </div>
        </footer>
    );
}
