import Navbar from "@/components/Navbar";
import ComposeEditor from "@/components/ComposeEditor";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ComposePage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto relative z-10">
                {/* Header / Nav */}
                <div className="flex items-center justify-between mb-12 animate-fade-in-up">
                    <Link href="/spark" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors pl-2">
                        <ArrowLeft size={20} />
                        <span className="font-bold text-sm">Back to Spark</span>
                    </Link>

                    <h1 className="text-xl font-black text-primary/20 uppercase tracking-widest hidden sm:block">
                        My Granite of Sand
                    </h1>
                </div>

                {/* Editor Container */}
                <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-3xl p-8 sm:p-12 shadow-2xl animate-fade-in-up animate-delay-1 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <ComposeEditor />
                </div>
            </div>
        </div>
    );
}
