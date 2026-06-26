import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiPostman,
  SiPytest,
  SiJson,
  SiPandas,
  SiNumpy,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import { TbApi, TbLock, TbShieldLock, TbGauge, TbCloudLock, TbClockHour4, TbTestPipe, TbBrandVscode, TbChartLine, TbBrandAws } from "react-icons/tb";

const skillCategories = [
  {
    title: "Backend & APIs",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Django", icon: SiDjango },
      { name: "DRF", icon: TbApi },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: TbApi },
      { name: "Authentication", icon: TbLock },
      { name: "Encryption", icon: TbShieldLock },
      { name: "Rate Limiting", icon: TbGauge },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: TbBrandAws },
      { name: "Firebase", icon: SiFirebase },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Deployment", icon: TbCloudLock },
      { name: "Cloud Security", icon: TbShieldLock },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Django ORM", icon: SiDjango },
    ],
  },
  {
    title: "Caching & Tools",
    skills: [
      { name: "Redis", icon: SiRedis },
      { name: "Cron Jobs", icon: TbClockHour4 },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Pytest", icon: SiPytest },
      { name: "Unit Testing", icon: TbTestPipe },
      { name: "JSON", icon: SiJson },
      { name: "VS Code", icon: TbBrandVscode },
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: TbChartLine },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "AJAX", icon: TbApi },
      { name: "React (Basic)", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
];

function SkillCard({ name, icon: Icon }) {
  return (
    <div className="glass-card rounded-xl p-2.5 flex flex-col items-center gap-1.5 hover:-translate-y-1 transition-all duration-300">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
        style={{ backgroundColor: "rgba(var(--accent-rgb), 0.12)", color: "var(--accent-light)" }}
      >
        <Icon />
      </div>
      <span className="text-[10px] font-medium text-gray-300 text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-accent font-medium mb-2 tracking-wide">What I know</p>
        <h2 className="text-3xl font-bold text-white">My Skills</h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          The tools and technologies I use to design, build, and ship backend systems.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent-primary)" }}
              ></span>
              {category.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;