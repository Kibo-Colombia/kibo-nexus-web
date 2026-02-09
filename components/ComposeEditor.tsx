"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Image as ImageIcon, Video, X, Send, Hash, CornerDownLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ComposeEditor() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [currentTag, setCurrentTag] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const router = useRouter();

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    }, [content]);

    // Determine post type logic
    const isDeepDive = content.length > 280 || title.length > 0 || subtitle.length > 0;
    const charCount = content.length;

    const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && currentTag.trim()) {
            e.preventDefault();
            if (!tags.includes(currentTag.trim())) {
                setTags([...tags, currentTag.trim()]);
            }
            setCurrentTag("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = () => {
        // Here we would handle the actual submission to Supabase
        console.log({ title, subtitle, content, tags, type: isDeepDive ? 'deep_dive' : 'shot' });
        router.push("/spark");
    };

    return (
        <div className="max-w-2xl mx-auto w-full relative">
            <div className="space-y-6">

                {/* Inputs Container */}
                <div className="space-y-4">
                    {/* Title input - Subtle */}
                    <input
                        type="text"
                        placeholder="Add Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-transparent text-4xl font-black text-primary placeholder:text-muted-foreground/30 focus:outline-none focus:placeholder:text-muted-foreground/50 transition-colors"
                    />

                    {/* Subtitle input */}
                    {title && (
                        <input
                            type="text"
                            placeholder="Add Subtitle..."
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            className="w-full bg-transparent text-xl font-medium text-foreground/80 placeholder:text-muted-foreground/30 focus:outline-none focus:placeholder:text-muted-foreground/50 transition-colors italic animate-fade-in-up"
                        />
                    )}

                    {/* Main Content Area */}
                    <textarea
                        ref={textareaRef}
                        placeholder="Write your granite of sand..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full bg-transparent text-lg text-foreground placeholder:text-muted-foreground/30 focus:outline-none resize-none min-h-[200px] leading-relaxed"
                    />
                </div>

                {/* Media & Tags Bar */}
                <div className="flex flex-col gap-4 border-t border-border/30 pt-4">

                    {/* Tags Input */}
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map(tag => (
                            <span key={tag} className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
                                #{tag}
                                <button onClick={() => removeTag(tag)} className="hover:text-foreground"><X size={12} /></button>
                            </span>
                        ))}
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Hash size={14} />
                            <input
                                type="text"
                                placeholder="Add tags..."
                                value={currentTag}
                                onChange={(e) => setCurrentTag(e.target.value)}
                                onKeyDown={handleAddTag}
                                className="bg-transparent text-sm focus:outline-none min-w-[100px] text-foreground"
                            />
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between">
                        <div className="relative">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                            >
                                <Plus size={24} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`} />
                            </button>

                            {/* Media Menu - Simplified */}
                            {isMenuOpen && (
                                <div className="absolute top-12 left-0 bg-card border border-border rounded-xl p-2 flex flex-col gap-2 shadow-xl z-20 animate-fade-in-up min-w-[150px]">
                                    <button className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg text-sm text-foreground/80 hover:text-foreground transition-colors text-left w-full">
                                        <ImageIcon size={18} />
                                        <span>Image</span>
                                    </button>
                                    <button className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg text-sm text-foreground/80 hover:text-foreground transition-colors text-left w-full">
                                        <Video size={18} />
                                        <span>Video</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            <span className={`text-xs font-mono font-bold transition-colors ${charCount > 280 ? 'text-[var(--color-living)]' : 'text-muted-foreground'}`}>
                                {charCount} chars • {isDeepDive ? 'Deep Dive' : 'Shot'}
                            </span>

                            <button
                                onClick={handleSubmit}
                                disabled={!content.trim()}
                                className="bg-primary text-background px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>Post</span>
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
