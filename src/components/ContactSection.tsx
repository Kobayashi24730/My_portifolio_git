import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          <span className="text-primary">04.</span> Contato
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8 mx-auto box-glow" />

        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          Vamos construir algo incrível juntos? Entre em contato!
        </p>

        <a
          href="mailto:guisato.acdc@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-[var(--font-display)] text-sm font-semibold rounded-lg box-glow hover:scale-105 transition-transform mb-12"
        >
          <Mail size={18} />
          guisato.acdc@gmail.com
        </a>

        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <a href="https://github.com/Kobayashi24730" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/guilherme-silva-9253a8354" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
