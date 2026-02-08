import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DivisionCard from "@/components/DivisionCard";
import { Sparkles, Target, Heart, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <h1 className="section-title mb-6 leading-tight">
              Engineering <span className="text-gradient">Hope</span>.<br />
              Building <span className="text-gradient">Legacy</span>.
            </h1>
            <p className="section-subtitle mb-8 max-w-2xl mx-auto md:mx-0 font-medium">
              More than a digital ecosystem. We build the bridge between where you are and who you want to become.
              Finances to fund your dreams, wisdom to guide them, and technology to build them.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center animate-fade-in-up animate-delay-1 mb-12">
              <a href="#divisions" className="kibo-button-primary">
                Explore the Ecosystem
              </a>
              <a href="#philosophy" className="kibo-button-outline">
                Read the Manifesto
              </a>
            </div>
          </div>

          {/* Mascot Illustration */}
          <div className="flex-1 flex justify-center items-center animate-fade-in-up animate-delay-2">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              {/* Solid background shape for mascot to replace "glows" */}
              <div className="absolute inset-0 bg-primary scale-90" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
              <Image
                src="/pets/kibo.png"
                alt="Kibo Mascot"
                width={450}
                height={450}
                className="relative z-10 object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4 animate-fade-in-up">
            Our <span className="text-gradient">Philosophy</span>
          </h2>
          <p className="section-subtitle text-center mb-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-1">
            Hope is not passive. It is a strategy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="kibo-card animate-fade-in-up animate-delay-2 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Heart className="text-kibo-dark" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Active Hope</h3>
                  <p className="text-foreground leading-relaxed">
                    We believe hope is the fuel for action. We build technology that turns "someday" into "today." It is a commitment to your future self.
                  </p>
                </div>
              </div>
            </div>

            <div className="kibo-card animate-fade-in-up animate-delay-3 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Target className="text-kibo-dark" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Intentional Growth</h3>
                  <p className="text-foreground leading-relaxed">
                    Every tool we build has a clear destination: to help you grow—whether financially, intellectually, or creatively. No noise, just signal.
                  </p>
                </div>
              </div>
            </div>

            <div className="kibo-card animate-fade-in-up animate-delay-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-kibo-dark" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Human-Centric Tech</h3>
                  <p className="text-foreground leading-relaxed">
                    We combine cutting-edge AI with intuitive design to create experiences that simplify your life, not complicate it.
                  </p>
                </div>
              </div>
            </div>

            <div className="kibo-card animate-fade-in-up animate-delay-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Zap className="text-kibo-dark" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Relentless Execution</h3>
                  <p className="text-foreground leading-relaxed">
                    Dreams without a plan are just illusions. We provide the strategy and the systems to help you take immediate action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up">
            <div className="kibo-card text-center border-primary">
              <div className="text-4xl font-black text-primary mb-2">4</div>
              <div className="text-sm text-foreground font-bold uppercase tracking-widest">Divisions</div>
            </div>
            <div className="kibo-card text-center border-primary">
              <div className="text-4xl font-black text-primary mb-2">∞</div>
              <div className="text-sm text-foreground font-bold uppercase tracking-widest">Possibilities</div>
            </div>
            <div className="kibo-card text-center border-primary">
              <div className="text-4xl font-black text-primary mb-2">1</div>
              <div className="text-sm text-foreground font-bold uppercase tracking-widest">Unified Ecosystem</div>
            </div>
            <div className="kibo-card text-center border-primary">
              <div className="text-4xl font-black text-primary mb-2">100%</div>
              <div className="text-sm text-foreground font-bold uppercase tracking-widest">Colombian Heart</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4 animate-fade-in-up">
            The <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="section-subtitle text-center mb-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-1">
            Integrated solutions for your life, your mind, and your legacy.
          </p>
          <DivisionCard />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="kibo-card border-2 border-primary p-12">
            <h2 className="section-title mb-4">
              Secure Your <span className="text-gradient">Foundation First</span>
            </h2>
            <p className="section-subtitle mb-8">
              The journey to a better life starts with financial clarity. Join the ecosystem today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://cfo.mykibo.site"
                target="_blank"
                rel="noopener noreferrer"
                className="kibo-button-primary"
              >
                Launch Kibo CFO
              </a>
              <a
                href="mailto:mykibocolombia@gmail.com"
                className="kibo-button-outline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

