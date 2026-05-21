import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(150 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(150 100% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-3xl text-center relative z-10">
        <p className="font-[var(--font-display)] text-primary text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
          &gt; hello_world
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Desenvolvedor Web<br />
          <span className="text-primary text-glow">Fullstack</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Especialista em PHP & Laravel | NextJS. Transformo user stories em funcionalidades eficientes e documentadas.
        </p>

        <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://github.com/Kobayashi24730"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-[var(--font-display)] text-sm font-semibold rounded-lg box-glow hover:scale-105 transition-transform"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/guilherme-silva-9253a8354"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-[var(--font-display)] text-sm rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="mailto:guisato.acdc@gmail.com"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-[var(--font-display)] text-sm rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            <Mail size={18} />
            Contato
          </a>
        </div>

        {/* Terminal line */}
        <div className="mt-16 font-[var(--font-display)] text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <span className="text-primary">$</span> cat skills.txt
          <span className="cursor-blink text-primary ml-1">▌</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
