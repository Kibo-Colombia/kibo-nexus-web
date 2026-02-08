
import Link from "next/link";
import UserMenu from "./UserMenu";
import { createClient } from "@/lib/supabase/server";

interface NavbarProps {
    transparent?: boolean;
}

export default async function Navbar({ transparent = false }: NavbarProps) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 ${transparent ? "bg-transparent" : "bg-background border-b border-border"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="text-3xl font-bold text-foreground hover:text-primary transition-colors">
                            Kibo
                        </Link>
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
                            Spark
                        </a>
                        <a
                            href="/#contact"
                            className="kibo-button-outline text-sm"
                        >
                            Contact
                        </a>

                        <UserMenu user={user} />
                    </div>
                </div>
            </div>
        </nav>
    );
}
