import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaRobot,
} from "react-icons/fa";

const themes = {
  dark: {
    bg: "bg-slate-950",
    text: "text-white",
    card: "bg-white/5 border-white/10",
    accent: "text-cyan-400",
    button: "bg-cyan-500 hover:bg-cyan-600",
    nav: "bg-slate-950/80",
    badge: "bg-slate-800",
  },
  purple: {
    bg: "bg-[#12001f]",
    text: "text-white",
    card: "bg-purple-500/10 border-purple-400/20",
    accent: "text-purple-300",
    button: "bg-purple-500 hover:bg-purple-600",
    nav: "bg-[#12001f]/80",
    badge: "bg-purple-900/50",
  },
  emerald: {
    bg: "bg-[#021c16]",
    text: "text-white",
    card: "bg-emerald-500/10 border-emerald-400/20",
    accent: "text-emerald-300",
    button: "bg-emerald-500 hover:bg-emerald-600",
    nav: "bg-[#021c16]/80",
    badge: "bg-emerald-900/40",
  },
  light: {
    bg: "bg-slate-100",
    text: "text-slate-950",
    card: "bg-white border-slate-200",
    accent: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
    nav: "bg-white/80",
    badge: "bg-slate-200",
  },
};

const journey = [
  {
    year: "2018 - 2021",
    title: "BSc IT Foundation",
    place: "SST College, University of Mumbai",
    icon: <FaGraduationCap />,
    story:
      "Completed Bachelor of Science in Information Technology, building a strong foundation in programming, databases, web development, and software engineering.",
    highlights: ["BSc IT", "CGPI: 9.20 / 10", "Programming Fundamentals", "Database Concepts"],
    tech: ["C#", "SQL", "JavaScript", "Web Development"],
  },
  {
    year: "August 2021",
    title: "Started as Junior Developer",
    place: "TSS Consultancy - TrackWizz",
    icon: <FaBriefcase />,
    story:
      "Joined a product-based company and started working on the Employee Trade Tracking product, gaining hands-on experience in enterprise product development.",
    highlights: [
      "Worked on ETT product",
      "Built enterprise features",
      "Fixed production issues",
      "Worked with QA, BA, and product teams",
    ],
    tech: [".NET Framework", ".NET Core", "AngularJS", "Angular", "MS SQL Server"],
  },
  {
    year: "2021 - 2023",
    title: "Enterprise Product Development",
    place: "TSS Consultancy - TrackWizz",
    icon: <FaCode />,
    story:
      "Worked across backend services, frontend enhancements, authentication workflows, SQL optimization, and enterprise-grade application stability.",
    highlights: [
      "Developed ASP.NET web services",
      "Implemented Google SSO",
      "Optimized SQL queries and stored procedures",
      "Resolved SonarQube issues",
      "Supported Agile delivery",
    ],
    tech: ["C#", "ASP.NET Web API", "Angular", "AngularJS", "SQL Server", "SonarQube"],
  },
  {
    year: "October 2023",
    title: "Joined Marcus Evans",
    place: "Senior Software Developer",
    icon: <FaBriefcase />,
    story:
      "Moved into a broader backend and enterprise development role, working on internal systems, reporting platforms, CRM integrations, backend APIs, and automation tools.",
    highlights: [
      "Maintained enterprise applications",
      "Built reporting workflows",
      "Resolved production-level issues",
      "Worked with business stakeholders",
      "Mentored developers",
    ],
    tech: [".NET Core", "Angular", "AngularJS", "MS SQL Server", "RDLC", "SSRS"],
  },
  {
    year: "2023 - Present",
    title: "Backend Systems & Automation",
    place: "Marcus Evans",
    icon: <FaCode />,
    story:
      "Expanded into modern backend engineering using Python, FastAPI, MongoDB, Docker, Azure Service Bus, WebSocket, and Server-Sent Events.",
    highlights: [
      "Built New Hire Tracker using FastAPI",
      "Created APIs for internal mobile applications",
      "Integrated HubSpot CRM",
      "Worked on WebSocket and SSE workflows",
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
      "Currently focusing on AI-driven backend systems, RAG platforms, voice AI workflows, transcription pipelines, and intelligent business automation.",
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
    title: "Client Analytics Portal",
    period: "Marcus Evans",
    desc:
      "Unified analytics portal consolidating data from two internal systems into a single reporting layer, with ABAC for fine-grained access control, Redis caching, WebSocket-based real-time sync, and embedded Apache Superset dashboards via guest-token authentication.",
    tech: ["Python", "Redis", "WebSocket", "Apache Superset", "ABAC"],
  },
  {
    title: "Enterprise Client Intelligence & RAG Platform",
    period: "Marcus Evans",
    desc:
      "Content-aware RAG ingestion pipeline with per-file-type chunking, chunk validation, MD5-based deduplication, and a registry pattern to prevent hallucination from stale content. Hybrid vector plus keyword search with re-ranking over call transcripts and CRM data.",
    tech: ["RAG", "GPT-4", "Azure Speech", "ADLS Gen2", "Python"],
  },
  {
    title: "Voice AI Agent",
    period: "Marcus Evans",
    desc:
      "Real-time audio streaming and transcript capture workflow using Twilio and LiveKit, integrated with CRM follow-up triggers to automate post-call actions, with a zero-shot/few-shot LLM prompting layer and production retrieval-failure fixes.",
    tech: ["Twilio", "LiveKit", "OpenAI", "Python"],
  },
  {
    title: "Mobile Conference App Backend",
    period: "Marcus Evans",
    desc:
      "Complete backend for an internal conference mobile application, including database schema design, optimized data retrieval procedures, a push notification service, and cloud storage management for staff and user uploads.",
    tech: [".NET Core", "REST APIs", "SQL Server", "Push Notifications"],
  },
  {
    title: "New Hire Tracker Portal",
    period: "Marcus Evans",
    desc:
      "Internal onboarding tracking portal built with FastAPI and MongoDB, using Firebase Authentication and role-based access control, with Azure Active Directory integration to pull employee details and replace manual HR tracking.",
    tech: ["FastAPI", "MongoDB", "Firebase", "RBAC", "Azure AD"],
  },
  {
    title: "TAP Budgeting Tool",
    period: "Marcus Evans",
    desc:
      "Sync and extraction pipeline for client financial data, pulling Excel files from SharePoint, parsing the details, and mapping them to the correct users in the database.",
    tech: ["Python", "SharePoint", "SQL Server"],
  },
  {
    title: "Linguarama Legacy Analysis",
    period: "Marcus Evans",
    desc:
      "Automation scripts to render and crawl a legacy platform, extracting webpage details into Excel to scope the effort and time required to migrate the application to a new platform.",
    tech: ["Python", "Automation", "Web Scraping"],
  },
  {
    title: "Employee Trade Tracking Product",
    period: "TSS Consultancy",
    desc:
      "Full-stack features for an employee trade compliance platform, including mobile-responsive UI and API layers for iOS and Android, Google SSO via OAuth 2.0, and optimized SQL Server queries and stored procedures.",
    tech: [".NET Core", "Angular", "AngularJS", "MS SQL Server", "OAuth 2.0"],
  },
];

export default function App() {
  const [themeName, setThemeName] = useState("dark");
  const theme = themes[themeName];

  return (
    <main className={`min-h-screen ${theme.bg} ${theme.text} overflow-hidden transition-colors duration-500`}>
      <nav className={`fixed top-0 w-full ${theme.nav} backdrop-blur border-b border-white/10 z-50`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className={`text-xl font-bold ${theme.accent}`}>
            Jayesh Rajput
          </a>

          <div className="hidden md:flex gap-6 text-sm items-center">
            <a href="#journey" className="hover:opacity-70">Journey</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>

            <select
              value={themeName}
              onChange={(e) => setThemeName(e.target.value)}
              className="bg-slate-900 text-white border border-white/10 rounded-lg px-3 py-2 outline-none"
            >
              <option value="dark">Dark</option>
              <option value="purple">Purple</option>
              <option value="emerald">Emerald</option>
              <option value="light">Light</option>
            </select>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 relative">
        <div className="absolute top-24 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="max-w-5xl text-center relative z-10">
          <p className={`${theme.accent} mb-4 text-lg tracking-wide`}>
            Hello, I am
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight py-3">
            <span className="inline-block animate-slideIn bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
              Jayesh Rajput
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-6">
            Backend Developer | Python FastAPI | .NET Core | AI Integrations
          </h2>

          <p className="mt-6 opacity-80 leading-8 max-w-4xl mx-auto">
            I build scalable enterprise APIs, backend systems, real-time workflows,
            reporting platforms, and AI-powered automation using Python, FastAPI,
            .NET Core, SQL Server, MongoDB, Azure Service Bus, WebSocket, SSE,
            Docker, and OpenAI technologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#journey"
              className={`px-7 py-3 ${theme.button} text-white rounded-lg font-medium transition`}
            >
              Explore My Journey
            </a>

            <a
              href="/resume.pdf"
              className={`px-7 py-3 border ${theme.accent} rounded-lg transition`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="journey" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className={`${theme.accent} mb-3`}>Career Timeline</p>
          <h2 className="text-4xl md:text-5xl font-bold">My Development Journey</h2>
          <p className="opacity-75 mt-5 max-w-3xl mx-auto leading-7">
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

                <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full ${theme.bg} border-2 border-current flex items-center justify-center ${theme.accent} z-10`}>
                  {item.icon}
                </div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${theme.card} border rounded-2xl p-7 hover:-translate-y-1 transition duration-300`}>
                  <p className={`${theme.accent} text-sm font-medium`}>{item.year}</p>
                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                  <p className="opacity-70 mt-1">{item.place}</p>
                  <p className="opacity-85 leading-7 mt-5">{item.story}</p>

                  <div className="mt-5">
                    <p className="text-sm opacity-60 mb-3">Key responsibilities</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {item.highlights.map((point) => (
                        <div key={point} className="text-sm opacity-85 flex gap-2">
                          <span className={theme.accent}>•</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className={`px-3 py-1 ${theme.badge} rounded-full text-xs opacity-90`}>
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
          <p className={`${theme.accent} mb-3`}>Project Story</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects That Shaped My Journey</h2>
          <p className="opacity-75 mt-5 max-w-3xl mx-auto leading-7">
            Each project represents a different stage of my growth: enterprise product
            development, backend APIs, reporting systems, automation, real-time systems,
            and AI-powered workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${theme.card} border rounded-2xl p-7 hover:-translate-y-2 transition duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${theme.badge} border border-white/10 flex items-center justify-center ${theme.accent} mb-5`}>
                0{index + 1}
              </div>

              <p className={`${theme.accent} text-sm`}>{project.period}</p>
              <h3 className="text-xl font-bold mt-2">{project.title}</h3>
              <p className="opacity-75 mt-4 leading-7">{project.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className={`px-3 py-1 ${theme.badge} rounded-full text-xs opacity-90`}>
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
            <p className={`${theme.accent} mb-3`}>Technical Identity</p>
            <h2 className="text-4xl font-bold leading-tight">
              Backend-first developer with full-stack understanding.
            </h2>
            <p className="opacity-75 mt-5 leading-7">
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
              <div key={group.title} className={`${theme.card} border rounded-2xl p-6`}>
                <h3 className={`text-xl font-semibold ${theme.accent} mb-4`}>
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={`px-3 py-1 ${theme.badge} rounded-full text-xs opacity-90`}>
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
        <p className={`${theme.accent} mb-3`}>Let’s Build</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Backend systems that solve real problems.
        </h2>

        <p className="opacity-75 mt-5 leading-7">
          Interested in backend engineering, FastAPI systems, .NET Core APIs,
          enterprise automation, real-time workflows, or AI-powered integrations.
        </p>

        <div className="flex justify-center gap-6 mt-8 text-3xl">
          <a href="mailto:jayeshrajput0701@gmail.com" className="hover:opacity-70">
            <FaEnvelope />
          </a>

          <a
            href="https://in.linkedin.com/in/jayesh-rajput-1061a5204"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Jayesh0701"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} Jayesh Rajput. Built with React & Tailwind CSS.
      </footer>
    </main>
  );
}