import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "Building Kibo: The Vision Behind the Ecosystem",
        excerpt:
            "Discover how the idea of creating a complete digital university campus was born and why we believe hope is the engine of change.",
        date: "2026-02-07",
        readTime: "5 min",
        category: "Vision",
        color: "#614FBB",
    },
    {
        id: 2,
        title: "CFO: Your Personal Financial Ally",
        excerpt:
            "Managing your finances doesn't have to be complicated. Learn how CFO helps you build your financial future step by step.",
        date: "2026-02-06",
        readTime: "4 min",
        category: "Finance",
        color: "#A9D9C7",
    },
    {
        id: 3,
        title: "The Power of Continuous Learning",
        excerpt:
            "In the digital age, never stopping learning is the key to success. Explore how Learn Kibo is revolutionizing online education.",
        date: "2026-02-05",
        readTime: "6 min",
        category: "Education",
        color: "#614FBB",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-24 pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8 font-semibold"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <div className="mb-16 animate-fade-in-up">
                        <h1 className="section-title mb-4">
                            Blog <span className="text-gradient">&amp; Newsletter</span>
                        </h1>
                        <p className="section-subtitle max-w-2xl font-medium">
                            Thoughts, ideas, and updates about the Kibo ecosystem.
                            Building hope, one article at a time.
                        </p>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="kibo-card border-2 border-primary p-8 mb-12 animate-fade-in-up animate-delay-1">
                        <h2 className="text-2xl font-bold mb-3 text-gradient">
                            Subscribe to the Newsletter
                        </h2>
                        <p className="text-foreground mb-6 font-medium">
                            Receive the latest updates, financial tips, and exclusive content
                            directly in your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors font-medium"
                            />
                            <button className="kibo-button-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-foreground mt-4 font-bold">
                            No spam. Cancel anytime.
                        </p>
                    </div>

                    {/* Blog Posts */}
                    <div className="space-y-6">
                        {blogPosts.map((post, index) => (
                            <article
                                key={post.id}
                                className={`kibo-card-hover animate-fade-in-up animate-delay-${index + 2}`}
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <span
                                                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm border"
                                                style={{
                                                    borderColor: post.color,
                                                    color: post.color,
                                                }}
                                            >
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                                                <Calendar size={14} />
                                                <span>
                                                    {new Date(post.date).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
                                                <Clock size={14} />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <h2
                                            className="text-2xl font-bold mb-4"
                                            style={{ color: post.color }}
                                        >
                                            {post.title}
                                        </h2>
                                        <p className="text-foreground leading-relaxed font-medium">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Coming Soon */}
                    <div className="kibo-card text-center p-8 mt-12">
                        <p className="text-foreground font-bold">
                            More articles coming soon... 🚀
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

