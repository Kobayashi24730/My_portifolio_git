const skills = [
  { category: "Backend", items: ["PHP Avançado", "Laravel", "PostgreSQL", "MySQL", "MariaDB"] },
  { category: "Frontend", items: ["JavaScript", "NextJS", "HTML5", "CSS3 Avançado", "APIs RESTful"] },
  { category: "DevOps & Infraestrutura", items: ["AWS Infrastructure", "Migração de Dados", "Testes e Debugging", "Git", "Linux"] },
  { category: "Ferramentas & Métodos", items: ["Figma (Noções)", "Documentação Técnica", "Metodologias Ágeis", "Aprendizado Contínuo", "User Stories"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          <span className="text-primary">02.</span> Skills
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-12 box-glow" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-[var(--font-display)] text-primary text-sm font-semibold mb-4 tracking-wider uppercase">
                {`// ${group.category}`}
              </h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2 group-hover:text-foreground transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-60" />
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
