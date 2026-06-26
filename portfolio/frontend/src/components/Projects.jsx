import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TbApi } from "react-icons/tb";

function ImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-gray-600 text-xs">No preview</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <img
  src={images[current]}
  alt={`${title} screenshot ${current + 1}`}
  className="w-full h-full object-contain bg-[#0f172a] transition-all duration-300"
/>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p - 1 + images.length) % images.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p + 1) % images.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <FiChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ background: i === current ? "#a78bfa" : "rgba(255,255,255,0.3)" }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);
  const images = project.images || [];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col"
        style={{ background: "#0f0f0f", border: "0.5px solid rgba(255,255,255,0.1)", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <FiX size={16} />
        </button>

        {/* Image slider */}
        {images.length > 0 && (
<div
  className="relative w-full flex items-center justify-center bg-[#0f172a]"
  style={{ height: "80vh" }}
>
  <img
    src={images[current]}
    alt={project.title + " " + (current + 1)}
    className="max-w-full max-h-full object-contain"
  />

  {images.length > 1 && (
    <>
      <button
        onClick={() =>
          setCurrent((p) => (p - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ background: "rgba(0,0,0,0.6)" }}
      >
        <FiChevronLeft size={20} />
      </button>

      <button
        onClick={() =>
          setCurrent((p) => (p + 1) % images.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ background: "rgba(0,0,0,0.6)" }}
      >
        <FiChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2 h-2 rounded-full"
            style={{
              background:
                i === current ? "#a78bfa" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </>
  )}
</div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize"
                style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "0.5px solid rgba(124,58,237,0.3)" }}
              >
                {project.category.replace("-", " ")}
              </span>
            </div>
            {(project.frontend_link || project.backend_link) && (
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 flex-shrink-0"
                style={{ background: "rgba(16,185,129,0.15)", color: "#34d399", border: "0.5px solid rgba(16,185,129,0.3)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                Live
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mb-5">
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2">Tech stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <span key={tech} className="accent-badge text-xs font-medium px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border text-gray-300 hover:text-white hover:border-white/30 transition-all"
              style={{ border: "0.5px solid rgba(255,255,255,0.15)" }}
            >
              <FiGithub size={14} />
              GitHub
            </a>
            {project.frontend_link && (
              <a
                href={project.frontend_link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all"
                style={{ background: "rgba(167,139,250,0.1)", color: "#a78bfa", border: "0.5px solid rgba(167,139,250,0.3)" }}
              >
                <FiExternalLink size={14} />
                Frontend
              </a>
            )}
            {project.backend_link && (
              <a
                href={project.backend_link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all"
                style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", border: "0.5px solid rgba(34,211,238,0.3)" }}
              >
                <TbApi size={15} />
                API Docs
              </a>
            )}
            {project.demo_link && !project.frontend_link && (
              <a
                href={project.demo_link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all"
                style={{ background: "rgba(52,211,153,0.1)", color: "#34d399", border: "0.5px solid rgba(52,211,153,0.3)" }}
              >
                <FiExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  const isLive = project.frontend_link || project.backend_link || project.demo_link;

  return (
    <div
      className="glass-card rounded-2xl overflow-hidden group flex flex-col cursor-pointer hover:-translate-y-1 transition-all duration-300"
      onClick={onClick}
    >
      <div className="h-44 relative overflow-hidden bg-white/5">
        <ImageSlider images={project.images || []} title={project.title} />
        {isLive && (
          <span
            className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 z-10"
            style={{ background: "rgba(16,185,129,0.15)", color: "#34d399", border: "0.5px solid rgba(16,185,129,0.3)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            Live
          </span>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "rgba(0,0,0,0.5)" }}>
          <span className="text-white text-xs font-medium px-3 py-1.5 rounded-full" style={{ border: "0.5px solid rgba(255,255,255,0.3)" }}>
            View details
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold mb-1.5 text-white leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tech_stack.slice(0, 4).map((tech) => (
            <span key={tech} className="accent-badge text-[10px] font-medium px-2 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 4 && (
            <span className="text-[10px] text-gray-500 px-2 py-0.5">
              +{project.tech_stack.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) => { console.error("Error fetching projects:", err); setError(true); })
      .finally(() => setLoading(false));
  }, []);

  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-accent font-medium mb-2 tracking-wide">My work</p>
        <h2 className="text-3xl font-bold text-white">Latest Projects</h2>
      </div>

      {loading && <p className="text-center text-gray-500">Loading projects...</p>}
      {error && <p className="text-center text-red-400">Couldn't load projects. Is the FastAPI backend running?</p>}

      {!loading && !error && (
        <>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={
                  "px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all " +
                  (filter === cat ? "accent-gradient text-white" : "glass-card text-gray-300")
                }
              >
                {cat.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
            ))}
          </div>
        </>
      )}

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default Projects;