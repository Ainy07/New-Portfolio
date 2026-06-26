import { useEffect, useRef, useState } from "react";
import {
  TbUser,
  TbRocket,
  TbBrandAws,
  TbDatabase,
} from "react-icons/tb";

function FadeInText({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(-1);

  useEffect(() => {
    const words = children.trim().split(/\s+/);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;

          const interval = setInterval(() => {
            setVisible(i);
            i++;

            if (i >= words.length) {
              clearInterval(interval);
            }
          }, 40);

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [children]);

  const words = children.trim().split(/\s+/);

  return (
    <p
      ref={ref}
      className="text-sm leading-7 text-gray-400"
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "6px",
            color: i <= visible ? "#d1d5db" : "#374151",
            transition: "all .3s ease",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

const stats = [
  {
    icon: TbRocket,
    value: "80%",
    title: "Performance Boost",
  },
  {
    icon: TbBrandAws,
    value: "AWS",
    title: "Cloud Deployment",
  },
  {
    icon: TbDatabase,
    value: "SQL + NoSQL",
    title: "Databases",
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-black"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-accent font-medium mb-2 tracking-wide">
          Get to know me
        </p>

        <h2 className="text-3xl font-bold text-white">
          About Me
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Passionate about building scalable backend systems,
          secure APIs, and high-performance applications.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* Main Card */}

        <div className="glass-card rounded-2xl p-8">

          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">

            <div className="flex items-center gap-3">

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{
                  background:
                    "rgba(var(--accent-rgb),0.12)",
                  color: "var(--accent-light)",
                }}
              >
                <TbUser />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Backend Engineer
                </h3>

                <p className="text-gray-500 text-sm">
                  Python • Django • FastAPI
                </p>
              </div>

            </div>

            <span
              className="px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background:
                  "rgba(var(--accent-rgb),0.12)",
                color: "var(--accent-light)",
              }}
            >
              2+ Years Experience
            </span>

          </div>

          <div className="space-y-6">

            <FadeInText>
             I am a Backend Engineer with 2+ years of experience designing and developing scalable, secure, and high-performance backend applications using Python, Django, Django REST Framework, and FastAPI. I specialize in building RESTful APIs with authentication, API security, rate limiting, encryption, and clean architecture to ensure reliable and production-ready systems.

            </FadeInText>

            <FadeInText>
             I have optimized backend performance by up to 80% through Redis caching, SQL query optimization, asynchronous processing, and efficient database design. My experience includes working with PostgreSQL, MySQL, MongoDB, Firebase Cloud Messaging (FCM), AWS cloud services, Docker, and CI/CD pipelines to build scalable and maintainable applications.

            </FadeInText>

            <FadeInText>
             Along with backend development, I have worked on React-based admin dashboards, API integrations, payment gateway integrations, inventory and order management systems, and real-time notification services. I enjoy solving complex backend challenges, writing clean and maintainable code, and continuously learning modern technologies to build secure, scalable, and high-quality software solutions.
            </FadeInText>

          </div>

        </div>

        {/* Stats */}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                    <div
                        key={item.title}
                        className="glass-card rounded-xl p-4 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-base mb-3"
                        style={{
                            background: "rgba(var(--accent-rgb),0.12)",
                            color: "var(--accent-light)",
                        }}
                        >
                        <Icon />
                        </div>

                        <h3 className="text-xl font-bold text-white">
                        {item.value}
                        </h3>

                        <p className="text-[11px] text-gray-500 mt-1 leading-4">
                        {item.title}
                        </p>
                    </div>
                    );
                })}
                </div>

      </div>
    </section>
  );
}

export default About;