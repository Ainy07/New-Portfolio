function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-black text-center"
    >
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float"
        style={{ backgroundColor: "var(--accent-light)" }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl animate-float"
        style={{ backgroundColor: "var(--accent-primary)", animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 animate-fade-up max-w-2xl">
        <p className="text-accent font-medium mb-3 tracking-wide">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">Ainy Gupta</h1>
        <p className="text-xl md:text-2xl font-semibold accent-gradient-text mb-6">
          Backend Engineer & Python Developer
        </p>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Building scalable, secure APIs with Python, Django, DRF, and FastAPI —
          turning ideas into production-ready backend systems.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
         <a
            href="https://drive.google.com/file/d/1OpdUnM_JSTfUuYS2k_gJaF42OoOQrYhq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-gradient text-white px-7 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
            View Resume
            </a>
          <a
            href="#contact"
            className="glass-card text-gray-100 px-7 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;