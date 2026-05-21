import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin. Built com React, Node.js e PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/seu-usuario/ecommerce",
    live: "#",
  },
  {
    title: "Task Manager API",
    description: "API RESTful para gerenciamento de tarefas com autenticação JWT, CRUD completo e documentação Swagger.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/seu-usuario/task-api",
    live: "#",
  },
  {
    title: "Real-Time Chat",
    description: "Aplicação de chat em tempo real com WebSockets, salas privadas e histórico de mensagens.",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    github: "https://github.com/seu-usuario/realtime-chat",
    live: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos dinâmicos, filtros avançados e exportação de relatórios em PDF.",
    tags: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
    github: "https://github.com/seu-usuario/dashboard",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          <span className="text-primary">03.</span> Projetos
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-12 box-glow" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all group animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-4">
                <h3 className="font-[var(--font-display)] text-foreground text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Ver ${project.title} no GitHub`}
                  >
                    <Github size={18} />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Ver demo de ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[var(--font-display)] text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
