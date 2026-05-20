import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaRobot,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const journey = [
  {
    year: "2018 - 2021",
    title: "BSc IT Foundation",
    place: "SST College, University of Mumbai",
    icon: <FaGraduationCap />,
    story:
      "Completed Bachelor of Science in Information Technology, building a strong foundation in programming, databases, software development, and problem-solving.",
    highlights: ["BSc IT", "CGPI: 9.20 / 10", "Programming Fundamentals", "Database Concepts"],
    tech: ["C#", "SQL", "JavaScript", "Web Development"],
  },
  {
    year: "August 2021",
    title: "Started Professional Journey",
    place: "TSS Consultancy - TrackWizz",
    icon: <FaBriefcase />,
    story:
      "Joined as a Junior Developer in a product-based company and worked on the Employee Trade Tracking product, gaining real enterprise product development experience.",
    highlights: [
      "Worked on ETT product",
      "Built enterprise features",
      "Handled production fixes",
      "Worked with QA, BA, and product teams",
    ],
    tech: [".NET Framework", ".NET Core", "AngularJS", "Angular", "MS SQL Server"],
  },
  {
    year: "2021 - 2023",
    title: "Growing as an Enterprise Developer",
    place: "TSS Consultancy - TrackWizz",
    icon: <FaCode />,
    story:
      "Contributed to backend services, authentication workflows, SQL optimization, and frontend enhancements. This phase helped me understand enterprise-grade coding, product stability, and scalable application development.",
    highlights: [
      "Developed ASP.NET web services",
      "Implemented Google SSO",
      "Optimized SQL queries and stored procedures",
      "Improved SonarQube code quality issues",
      "Supported sprint-based delivery",
    ],
    tech: ["C#", "ASP.NET Web API", "Angular", "AngularJS", "SQL Server", "SonarQube"],
  },
  {
    year: "October 2023",
    title: "Joined Marcus Evans",
    place: "Senior Software Developer",
    icon: <FaBriefcase />,
    story:
      "Moved into a broader backend and enterprise development role, working across internal business systems, reporting platforms, CRM integrations, backend APIs, and automation tools.",
    highlights: [
      "Maintained internal enterprise products",
      "Built reporting workflows",
      "Resolved production-level issues",
      "Collaborated with business users",
      "Mentored developers and supported delivery",
    ],
    tech: [".NET Core", "Angular", "AngularJS", "MS SQL Server", "RDLC", "SSRS"],
  },
  {
    year: "2023 - Present",
    title: "Backend Systems & Automation",
    place: "Marcus Evans",
    icon: <FaCode />,
    story:
      "Expanded into modern backend engineering using Python, FastAPI, MongoDB, Docker, Azure Service Bus, and real-time communication workflows.",
    highlights: [
      "Built New Hire Tracker using FastAPI",
      "Created backend APIs for internal mobile applications",
      "Integrated HubSpot CRM with internal systems",
      "Worked on WebSocket and SSE based communication",
      "Designed async messaging workflows",
    ],
    tech: ["Python", "FastAPI", "MongoDB", "Docker", "Azure Service Bus", "WebSocket", "SSE"],
  },
  {
    year: "Current Focus",
    title: "AI-Powered Backend Engineering",
    place: "GenAI Systems & Real-Time Workflows",
    icon: <FaRobot />,
    story:
      "Currently focusing on AI-driven backend systems, RAG platforms, voice AI workflows, real-time audio streaming, transcription pipelines, and intelligent business automation.",
    highlights: [
      "Worked on RAG-powered client intelligence platform",
      "Used GPT-4 and Azure Speech Services",
      "Contributed to Voice AI Agent workflows",
      "Worked with Twilio and LiveKit",
      "Built AI-driven automation flows",
    ],
    tech: ["OpenAI", "RAG", "GPT-4", "Azure Speech", "Twilio", "LiveKit", "Python"],
  },
];

const projects = [
  {
    title: "Employee Trade Tracking Product",
    period: "TSS Consultancy",
    desc:
      "Enterprise product built for employee trade compliance workflows, where I worked on frontend features, backend services, authentication, SQL optimization, and product stability.",
    tech: [".NET Framework", "AngularJS", "Angular", "MS SQL Server"],
  },
  {
    title: "New Hire Tracker Platform",
    period: "Marcus Evans",
    desc:
      "Internal HR automation platform built with FastAPI, MongoDB, and Docker to streamline onboarding tracking, role-based workflows, and internal process automation.",
    tech: ["FastAPI", "Python", "MongoDB", "Docker"],
  },
  {
    title: "Internal Mobile Application APIs",
    period: "Marcus Evans",
    desc:
      "Designed backend APIs for internal mobile and conference-related workflows with scalable REST APIs and real-time communication support.",
    tech: [".NET Core", "FastAPI", "REST APIs", "WebSocket", "SSE"],
  },
  {
    title: "Enterprise Reporting & CMS Platform",
    period: "Marcus Evans",
    desc:
      "Enhanced enterprise CMS and reporting systems using .NET Core, Angular, SQL Server, SSRS, and RDLC reports while improving reporting accuracy and backend performance.",
    tech: [".NET Core", "Angular", "SQL Server", "SSRS", "RDLC"],
  },
  {
    title: "Client Intelligence & RAG Platform",
    period: "GenAI Systems",
    desc:
      "AI-powered business intelligence platform combining call transcripts, CRM data, GPT-4, Azure Speech, and RAG pipelines to generate actionable business insights.",
    tech: ["OpenAI", "RAG", "GPT-4", "Azure Speech", "Python"],
  },
  {
    title: "Voice AI Agent",
    period: "GenAI Systems",
    desc:
      "Real-time voice AI workflow using Twilio and LiveKit for audio streaming, transcript capture, CRM-driven follow-ups, and AI-powered communication automation.",
    tech: ["Twilio", "LiveKit", "Python", "AI", "Real-Time Streaming"],
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-cyan-400">
            Jayesh Rajput
          </a>

          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#journey" className="hover:text-cyan-400">Journey</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-24 relative"
      >
        <div className="absolute top-24 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="max-w-5xl text-center relative z-10">
          <p className="text-cyan-400 mb-4 text-lg tracking-wide">
            My journey from graduate to backend engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text min-h-[95px]">
            <Typewriter
              words={[
                "Jayesh Rajput",
                "Backend Developer",
                "Python FastAPI Engineer",
                ".NET Core Developer",
                "AI Integration Engineer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </h1>

          <h2 className="text-2xl md:text-3xl mt-6 text-slate-200">
            Backend Developer | Python FastAPI | .NET Core | AI Integrations
          </h2>

          <p className="mt-6 text-slate-400 leading-8 max-w-4xl mx-auto">
            I build scalable enterprise APIs, backend systems, real-time workflows,
            reporting platforms, and AI-powered automation using Python, FastAPI,
            .NET Core, SQL Server, MongoDB, Azure Service Bus, WebSocket, SSE,
            Docker, and OpenAI technologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#journey"
              className="px-7 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition"
            >
              Explore My Journey
            </a>

            <a
              href="/resume.pdf"
              className="px-7 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="journey" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-3">Career Timeline</p>
          <h2 className="text-4xl md:text-5xl font-bold">My Development Journey</h2>
          <p className="text-slate-400 mt-5 max-w-3xl mx-auto leading-7">
            A story of growth from academic fundamentals to enterprise development,
            backend systems, cloud integrations, and AI-powered engineering.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

          <div className="space-y-14">
            {journey.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-1/2" />

                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-10">
                  {item.icon}
                </div>

                <div className="ml-12 md:ml-0 md:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-cyan-500/60 transition duration-300">
                  <p className="text-cyan-400 text-sm font-medium">{item.year}</p>

                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                  <p className="text-slate-400 mt-1">{item.place}</p>

                  <p className="text-slate-300 leading-7 mt-5">{item.story}</p>

                  <div className="mt-5">
                    <p className="text-sm text-slate-500 mb-3">Key responsibilities</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {item.highlights.map((point) => (
                        <div key={point} className="text-sm text-slate-300 flex gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/80 border border-white/10 rounded-full text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-cyan-400 mb-3">Project Story</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects That Shaped My Journey</h2>
          <p className="text-slate-400 mt-5 max-w-3xl mx-auto leading-7">
            Each project represents a different stage of my growth: enterprise product
            development, backend APIs, reporting systems, automation, real-time systems,
            and AI-powered workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/5 border border-white/10 rounded-2xl p-7 hover:-translate-y-2 hover:border-cyan-500/60 transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
                0{index + 1}
              </div>

              <p className="text-cyan-400 text-sm">{project.period}</p>
              <h3 className="text-xl font-bold mt-2">{project.title}</h3>

              <p className="text-slate-400 mt-4 leading-7">{project.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div>
            <p className="text-cyan-400 mb-3">Technical Identity</p>
            <h2 className="text-4xl font-bold leading-tight">
              Backend-first developer with full-stack understanding.
            </h2>
            <p className="text-slate-400 mt-5 leading-7">
              My strength is connecting business problems with reliable backend systems,
              clean APIs, optimized databases, automation, and modern AI integrations.
            </p>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Backend",
                items: ["Python", "FastAPI", ".NET Core", "ASP.NET Web API", "REST APIs", "Microservices"],
              },
              {
                title: "Real-Time & Messaging",
                items: ["WebSocket", "SSE", "Azure Service Bus", "RabbitMQ", "Async Workflows"],
              },
              {
                title: "Database & Reporting",
                items: ["MS SQL Server", "MongoDB", "MySQL", "Stored Procedures", "SSRS", "RDLC"],
              },
              {
                title: "AI & Automation",
                items: ["OpenAI", "RAG", "GPT-4", "Prompt Engineering", "Azure Speech", "Twilio"],
              },
              {
                title: "Frontend Collaboration",
                items: ["Angular", "AngularJS", "JavaScript", "TypeScript"],
              },
              {
                title: "Tools & Practices",
                items: ["Docker", "Git", "Azure DevOps", "Jira", "SonarQube", "Agile"],
              },
            ].map((group) => (
              <div key={group.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-cyan-400 mb-3">Let’s Build</p>
        <h2 className="text-4xl md:text-5xl font-bold">Backend systems that solve real problems.</h2>

        <p className="text-slate-400 mt-5 leading-7">
          Interested in backend engineering, FastAPI systems, .NET Core APIs,
          enterprise automation, real-time workflows, or AI-powered integrations.
        </p>

        <div className="flex justify-center gap-6 mt-8 text-3xl">
          <a href="mailto:jayeshrajput0701@gmail.com" className="hover:text-cyan-400">
            <FaEnvelope />
          </a>

          <a
            href="https://in.linkedin.com/in/jayesh-rajput-1061a5204"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Jayesh0701"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Jayesh Rajput. Built with React & Tailwind CSS.
      </footer>
    </main>
  );
}