// estilo Microsoft Fluent + acessibility WCAG

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          <span className="text-blue-700">01.</span> Sobre mim
        </h2>
        <div className="w-16 h-1 bg-blue-700 rounded-full mb-8 shadow-sm" />

        {/* Card Estilo Microsoft Fluent (Ajustado para maior contraste) */}
        <div className="bg-white/85 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8 shadow-lg shadow-slate-300/40 hover:shadow-xl transition-all duration-300">
          
          {/* Objeto de código com sintaxe em alto contraste */}
          <div className="font-[var(--font-display)] text-sm font-medium text-slate-700 mb-4">
            <span className="text-purple-700 font-bold">const</span> <span className="text-blue-700 font-bold">dev</span> = {'{'}
          </div>
          
          <div className="pl-6 space-y-2.5 font-[var(--font-display)] text-sm font-medium">
            <p>
              <span className="text-slate-700">nome:</span>{" "}
              <span className="text-emerald-800 font-semibold">"Guilherme Silva"</span>,
            </p>
            <p>
              <span className="text-slate-700">atuação:</span>{" "}
              <span className="text-emerald-800 font-semibold">"Full Stack & AI Engineer"</span>,
            </p>
            <p>
              <span className="text-slate-700">experiencia:</span>{" "}
              <span className="text-emerald-800 font-semibold">"4+ anos"</span>,
            </p>
            <p>
              <span className="text-slate-700">foco:</span>{" "}
              <span className="text-emerald-800 font-semibold">"Sistemas escaláveis e inteligência artificial"</span>,
            </p>
          </div>
          
          <div className="font-[var(--font-display)] text-sm font-medium text-slate-700 mt-4">
            {'}'};
          </div>

          {/* Texto principal legível e bem escuro */}
          <p className="text-slate-800 mt-6 leading-relaxed font-normal text-base">
            Engenheiro de Software Full Stack especializado na criação de aplicações web de alta performance. Tenho sólida bagagem no ecossistema <strong className="font-semibold text-slate-950">PHP (Laravel)</strong>, <strong className="font-semibold text-slate-950">JavaScript/TypeScript (React, Node.js) e Java(Spring Boot)</strong>, além de expertise em modelagem de bancos de dados relacionais e automação de rotinas complexas. Atuo unindo análise técnica apurada e engenharia de IA para transformar requisitos de negócio em produtos seguros, escaláveis e bem documentados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
