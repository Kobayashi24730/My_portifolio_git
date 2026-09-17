import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin. Built com React, Node.js e PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/Kobayashi24730/Ecommerce-moder-pro",
    live: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos dinâmicos, filtros avançados e exportação de relatórios em PDF.",
    tags: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
    github: "https://github.com/Kobayashi24730/Commerce-Analytics-Dashboard",
    live: "#",
  },
  {
    title: "SaaS Clear White",
    description: "Plataforma SaaS com front-end em React e back-end em Laravel, cobrindo autenticação, planos e área do cliente.",
    tags: ["React", "Laravel", "PostgreSQL", "Tailwind"],
    github: "https://github.com/Kobayashi24730/lp-clear-white",
    live: "#",
  },
  {
    title: "Atendimento via WhatsApp",
    description: "Sistema de atendimento automatizado via WhatsApp, com integração à Evolution API para gestão de conversas e webhooks.",
    tags: ["Node.js", "Evolution API", "WhatsApp", "Webhooks", "Next.js"],
    github: "https://github.com/Kobayashi24730/evolution-whatsapp-atendimento",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 px-6"
      style={{ fontFamily: '"Segoe UI", "Segoe UI Web", -apple-system, BlinkMacSystemFont, Roboto, sans-serif' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 id="projects-heading" className="text-3xl md:text-4xl font-semibold text-[#201F1E] mb-2">
          <span className="text-[#0078D4]">03.</span> Projetos
        </h2>
        <div className="w-16 h-0.5 bg-[#0078D4] mb-12" aria-hidden="true" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="bg-white border border-[#E1E1E1] rounded-md p-6 shadow-sm hover:border-[#0078D4] hover:shadow-md focus-within:border-[#0078D4] focus-within:shadow-md transition-all motion-safe:animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4 gap-3">
                <h3 className="text-[#201F1E] text-lg font-semibold">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#605E5C] hover:text-[#0078D4] focus-visible:text-[#0078D4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0078D4] rounded transition-colors"
                    aria-label={`Ver código de ${project.title} no GitHub`}
                  >
                    <Github size={18} aria-hidden="true" />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#605E5C] hover:text-[#0078D4] focus-visible:text-[#0078D4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0078D4] rounded transition-colors"
                      aria-label={`Ver demonstração ao vivo de ${project.title}`}
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[#605E5C] text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2" aria-label={`Tecnologias usadas em ${project.title}`}>
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs font-medium text-[#0078D4] bg-[#EFF6FC] border border-[#C7E0F4] px-2.5 py-1 rounded"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;