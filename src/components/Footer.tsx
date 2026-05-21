const Footer = () => (
  <footer className="border-t border-border py-8 px-6 text-center">
    <p className="font-[var(--font-display)] text-xs text-muted-foreground">
      <span className="text-primary">&lt;/&gt;</span> Desenvolvido com 💚 por{" "}
      <span className="text-foreground">Guilherme Silva</span> © {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
