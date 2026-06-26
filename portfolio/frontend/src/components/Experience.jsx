function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Medinatal Healthcare Private Limited (Surginatal)",
      location: "Jaipur",
      duration: "Sept 2024 – Present",
      current: true,
      points: [
        "Designed scalable, high-performance backend systems using microservices and system design principles.",
        "Developed and optimized REST APIs using Django, FastAPI, and Redis, improving performance 80–83%.",
        "Integrated Firebase for real-time notifications, authentication, SMS alerts, and order tracking.",
        "Implemented DRF authentication, role-based permissions, and multi-vendor access control.",
      ],
    },
    {
      role: "Associate Software Developer",
      company: "Things Ally Private Limited",
      location: "Indore",
      duration: "June 2023 – Sept 2023",
      current: false,
      points: [
        "Integrated Google & Facebook OAuth2 (Django-allauth) to streamline user onboarding.",
        "Built dynamic frontend features using AJAX, HTML/CSS, and Bootstrap (live search, cart updates).",
      ],
    },
    {
      role: "Python Developer (Intern)",
      company: "Affimintus Technologies",
      location: "Indore",
      duration: "Nov 2022 – May 2023",
      current: false,
      points: [
        "Developed 10+ REST APIs using Django and DRF, improving efficiency by 40% and reducing errors by 25%.",
        "Implemented JWT authentication, role-based access, and optimized Django ORM with MySQL/PostgreSQL.",
        "Built reusable serializers, viewsets, and CBVs, collaborating in Agile teams with Git.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-accent font-medium mb-2 tracking-wide">My journey</p>
        <h2 className="text-3xl font-bold text-white">Experience</h2>
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-10">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full flex items-center justify-center">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: exp.current ? "var(--accent-primary)" : "#3f3f46",
                    boxShadow: exp.current
                      ? "0 0 0 4px rgba(var(--accent-rgb), 0.2)"
                      : "none",
                  }}
                ></div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                {exp.current && (
                  <span className="accent-badge text-xs px-2 py-0.5 rounded-full font-medium">
                    Current
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-500 mb-1">{exp.duration}</p>
              <p className="text-gray-400 font-medium mb-4">
                {exp.company} <span className="text-gray-600">·</span> {exp.location}
              </p>

              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-gray-400 leading-relaxed">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    ></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;