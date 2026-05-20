import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    desc: "Short description of your project.",
    tech: "React, Tailwind",
    live: "#",
    github: "#",
  },
  {
    title: "Project Two",
    desc: "Short description of your project.",
    tech: "Node, MongoDB",
    live: "#",
    github: "#",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
          <a href="#home" className="font-bold text-xl">Jayesh</a>
          <div className="space-x-5 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <p className="text-cyan-400 mb-3">Hi, I am</p>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Jayesh Rajput
          </h1>
          <h2 className="text-2xl mt-4 text-slate-300">Full Stack Developer</h2>
          <p className="mt-6 text-slate-400">
            I build modern, responsive web applications using React, JavaScript, and backend technologies.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#projects" className="px-6 py-3 bg-cyan-500 rounded-lg font-medium">View Projects</a>
            <a href="/Jayesh_Rajput_Resume_DotNet.pdf" className="px-6 py-3 border border-cyan-500 rounded-lg">Resume</a>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-slate-400 leading-7">
          I am a developer focused on creating clean, scalable, and user-friendly applications.
          I enjoy working with React, APIs, databases, and solving real-world business problems.
        </p>
      </section>

      <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["React", "JavaScript", "Tailwind", "Node.js", "Express", "MongoDB", "SQL", "Git"].map(skill => (
            <span className="px-4 py-2 bg-white/10 rounded-full" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div className="bg-white/10 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition" key={project.title}>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-slate-400 mt-3">{project.desc}</p>
              <p className="text-cyan-400 mt-3 text-sm">{project.tech}</p>
              <div className="mt-5 flex gap-3">
                <a href={project.live} className="px-4 py-2 bg-cyan-500 rounded">Live</a>
                <a href={project.github} className="px-4 py-2 border border-white/20 rounded">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-slate-400 mt-4">Let’s connect and build something great.</p>
        <div className="flex justify-center gap-6 mt-6 text-3xl">
          <a href="https://github.com/yourusername"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername"><FaLinkedin /></a>
        </div>
      </section>
    </main>
  );
}