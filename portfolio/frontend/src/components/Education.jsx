function Education() {
  const education = [
    {
      degree: "BSc Electronics",
      institute: "P. M. B. Gujarati Science College, DAVV University",
      location: "Indore",
      duration: "2019 – 2022",
      note: "Built a foundation in circuits, systems thinking, and problem-solving that later carried over into backend architecture.",
    },
    {
      degree: "Full Stack Development (Python)",
      institute: "PPTS",
      location: "Indore",
      duration: "May 2022 – Nov 2022",
      note: "Hands-on training in Python, Django, databases, and frontend basics — the launchpad into professional backend engineering.",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-accent font-medium mb-2 tracking-wide">My background</p>
        <h2 className="text-3xl font-bold text-white">Education</h2>
      </div>

      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>

        <div className="space-y-12">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-10">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full flex items-center justify-center">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                ></div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
              <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
              <p className="text-gray-400 font-medium mb-3">
                {edu.institute} <span className="text-gray-600">·</span> {edu.location}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{edu.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;