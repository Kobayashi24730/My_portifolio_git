const skills = [
  { 
    category: "Backend", 
    items: ["PHP", "Laravel", "Node.js", "Express", "TypeScript", "Java", "Python", "PostgreSQL", "MySQL", "MariaDB"] 
  },
  { 
    category: "Frontend", 
    items: ["JavaScript", "Next.js", "React", "Tailwind CSS", "React Native", "HTML5", "CSS3 Avançado", "APIs RESTful"] 
  },
  { 
    category: "DevOps & Infraestrutura", 
    items: ["AWS Infrastructure", "Docker", "Migração de Dados", "Testes e Debugging", "Git", "Linux"] 
  },
  { 
    category: "Ferramentas & Métodos", 
    items: ["Figma", "VS Code", "Postman", "CI/CD Pipeline"] 
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          <span className="text-blue-700">02.</span> Skills & Tecnologias
        </h2>
        <div className="w-16 h-1 bg-blue-700 rounded-full mb-12 shadow-sm" />

        {/* Grid com Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="bg-white/85 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Título do Card */}
              <h3 className="font-[var(--font-display)] text-blue-700 text-xs font-bold mb-4 tracking-wider uppercase">
                {`// ${group.category}`}
              </h3>

              {/* Lista de Tecnologias */}
              <ul className="space-y-2.5">
                {group.items.map((skill) => (
                  <li 
                    key={skill} 
                    className="text-slate-800 font-medium text-sm flex items-center gap-2.5 group-hover:text-slate-950 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;