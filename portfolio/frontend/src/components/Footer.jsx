function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 text-center transition-colors duration-300">
      <p className="font-semibold text-white mb-2 accent-gradient-text inline-block">
        Ainy Gupta
      </p>
      <p className="text-sm mb-4">
        Satna, India | +91 7566248929 | ainygupta00@gmail.com
      </p>
      <div className="flex justify-center gap-6 text-sm mb-4">
        <a
          href="https://www.linkedin.com/in/ainy-gupta-882917242/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ainy07"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
        >
          GitHub
        </a>
      </div>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Ainy Gupta. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;