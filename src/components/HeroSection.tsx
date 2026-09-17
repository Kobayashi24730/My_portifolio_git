import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-slate-50/50">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: 'linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(90deg, #0066cc 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Efeito Radial de Luz Suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl text-center relative z-10 pt-16">
        {/* Badge do Topo */}
        <p className="inline-block px-3 py-1 bg-blue-50 border border-blue-200/80 rounded-full font-[var(--font-display)] text-blue-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
          &gt; hello_world
        </p>

        {/* Título Principal em Alto Contraste */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight animate-fade-in-up">
          Desenvolvedor<br />
          <span className="text-blue-700 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Full Stack & AI Engineer
          </span>
        </h1>

        {/* Descrição Aprimorada */}
        <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium animate-fade-in-up">
          Especialista no ecossistema <strong className="font-semibold text-slate-900">PHP (Laravel)</strong> e <strong className="font-semibold text-slate-900">TypeScript (Next.js / Node.js)</strong>. Construo soluções web escaláveis, sistemas inteligentes e rotinas de alto desempenho.
        </p>

        {/* Botões Estilo Fluent */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="https://github.com/Kobayashi24730"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-[var(--font-display)] text-sm font-semibold rounded-xl shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Github size={18} />
            GitHub
          </a>
          
          <a
            href="https://www.linkedin.com/in/guilherme-silva-9253a8354"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md border border-slate-300 text-slate-800 font-[var(--font-display)] text-sm font-semibold rounded-xl shadow-sm hover:bg-slate-100 hover:border-slate-400 hover:text-blue-700 active:scale-[0.98] transition-all"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          
          <a
            href="mailto:guisato.acdc@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md border border-slate-300 text-slate-800 font-[var(--font-display)] text-sm font-semibold rounded-xl shadow-sm hover:bg-slate-100 hover:border-slate-400 hover:text-blue-700 active:scale-[0.98] transition-all"
          >
            <Mail size={18} />
            Contato
          </a>
        </div>

        {/* Linha de Terminal */}
        <div className="mt-16 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-lg shadow-sm font-[var(--font-display)] text-sm text-slate-700 animate-fade-in-up">
          <span className="text-blue-700 font-bold">$</span> cat skills.txt
          <span className="animate-pulse text-blue-700 font-bold ml-0.5">▌</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;