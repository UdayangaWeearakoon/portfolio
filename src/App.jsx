import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Add 'Award' to this list:
import { Github, Linkedin, Mail, FileText, ChevronDown, Moon, Sun, Award } from 'lucide-react'; 
// Add 'certifications' to this list:
import { personalDetails, skills, projects, certifications } from './data';

// --- Theme Toggle Logic ---
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600 dark:text-cyan-400 font-mono">&lt;Udayanga /&gt;</h1>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">Projects</a>
          {/* New Link Added Here */}
          <a href="#certifications" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">Achievements</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">Contact</a>
        </div>
        <ThemeToggle />
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-16 px-4">
    <div className="text-center max-w-3xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 p-1 rounded-full mb-6">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>
        <h2 className="text-blue-600 dark:text-cyan-400 font-mono mb-2 text-lg">Hello, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-slate-900 dark:text-slate-100 transition-colors">
          {personalDetails.name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 transition-colors">
          {personalDetails.title}
        </p>
        
        <div className="flex justify-center gap-4">
          <a href={personalDetails.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-600 dark:hover:text-cyan-400 transition-all border border-slate-200 dark:border-white/10">
            <Github size={24} />
          </a>
          <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-600 dark:hover:text-cyan-400 transition-all border border-slate-200 dark:border-white/10">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${personalDetails.email}`} className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-600 dark:hover:text-cyan-400 transition-all border border-slate-200 dark:border-white/10">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-10 animate-bounce text-slate-400 dark:text-slate-600">
      <ChevronDown size={32} />
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50 transition-colors">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
        <span className="text-blue-600 dark:text-cyan-400">01.</span> About Me
      </h2>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-colors">
          <p className="mb-4">{personalDetails.about}</p>
          <p className="mb-4">
            I am currently a 3rd-year undergraduate at <strong>SLIIT</strong> with a CGPA of <strong>3.58</strong>. 
            I have been recognized on the Dean's List twice and recently ranked 14th at the SLIIT Xtreme 4.0 Hackathon.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 border border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 rounded hover:bg-blue-50 dark:hover:bg-cyan-400/10 transition font-medium">
              <FileText size={18} /> View Resume
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm transition-colors">
            <h3 className="text-blue-600 dark:text-cyan-400 font-bold mb-2">Education</h3>
            <p className="font-semibold text-slate-900 dark:text-slate-100">BSc (Hons) in IT</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Specializing in Data Science</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">SLIIT (2023 - Present)</p>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 px-4 transition-colors">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-slate-900 dark:text-white">
        <span className="text-blue-600 dark:text-cyan-400">02.</span> Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={index} 
            className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-cyan-400/50 shadow-sm transition-all"
          >
            <div className="text-blue-600 dark:text-cyan-400 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span key={i} className="text-sm bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50 transition-colors">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-slate-900 dark:text-white">
        <span className="text-blue-600 dark:text-cyan-400">03.</span> Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-white/5 hover:border-blue-400 dark:hover:border-cyan-400/30 transition-all shadow-sm group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition">{project.title}</h3>
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400">
                <Github size={20} />
              </a>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed min-h-[60px]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs text-blue-600 dark:text-cyan-400 font-mono bg-blue-50 dark:bg-cyan-900/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="py-20 px-4 transition-colors">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-slate-900 dark:text-white">
        <span className="text-blue-600 dark:text-cyan-400">04.</span> Certifications & Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={index} 
            className="flex items-start gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-blue-300 dark:hover:border-cyan-400/50 transition-all"
          >
            <div className="p-3 bg-blue-50 dark:bg-cyan-900/20 text-blue-600 dark:text-cyan-400 rounded-lg">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{cert.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{cert.issuer}</p>
              <span className="inline-block mt-2 text-xs font-mono px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                {cert.type}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  // Added bg-slate-50 and dark:bg-slate-800/50 for the alternating color effect
  <section id="contact" className="py-20 px-4 text-center bg-slate-50 dark:bg-slate-800/50 transition-colors">
    <div className="max-w-2xl mx-auto">
      {/* Updated Number to 05 */}
      <h2 className="text-blue-600 dark:text-cyan-400 font-mono mb-4">05. What's Next?</h2>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Get In Touch</h2>
      <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
        I am currently looking for an internship in Data Science or Full-Stack Development. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a 
        href={`mailto:${personalDetails.email}`}
        className="inline-block px-8 py-4 border border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 rounded hover:bg-blue-50 dark:hover:bg-cyan-400/10 transition font-mono font-medium"
      >
        Say Hello
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 transition-colors">
    <p>Designed & Built by Udayanga Weerakoon</p>
  </footer>
);

function App() {
  return (
    // Update this specific line:
    <div className="relative w-full overflow-hidden min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;