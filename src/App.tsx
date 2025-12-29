import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  ArrowUp,
  Briefcase,
  Calendar,
  Brush,
  Layout,
  Smartphone,
  TrendingUp
} from 'lucide-react';
import resumePdf from './Assets/SRIDHAR-RESUME.pdf';
import profileImg from './Assets/20250810_093517.jpg';
import collegeImg from './Assets/projects/hitech.png';
import aarogyaImg from './Assets/projects/AarogyaJal.png';
import portfolioImg from './Assets/projects/Portfolio.png';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); 
// idle | loading | success | error



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

  

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  setFormStatus('loading');

  const form = e.currentTarget;
  const data = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      setFormStatus('success');
      form.reset();

      // 🔄 Auto-hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } else {
      setFormStatus('error');
    }
  } catch (error) {
    setFormStatus('error');
  }
};



  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
     

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer group" onClick={() => scrollToSection('home')}>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Sridhar <span className="text-cyan-400">-</span> Dev

                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.toLowerCase()
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 animate-slideIn"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-slate-800 text-cyan-400'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl top-1/2 left-1/2 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left space-y-6 animate-fadeInUp">
              <div className="inline-block">
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium animate-pulse">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-400 text-2xl sm:text-3xl mb-2">Hi, I'm</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Sridhar
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 font-light">
  Frontend Developer | MERN Stack Learner
</p>
<span className="text-cyan-400 text-sm tracking-wide">
  Learning • Building • Growing
</span>

              <p className="text-gray-500 max-w-lg">
  Frontend-focused developer building clean, responsive, and user-friendly web interfaces
  using modern technologies. Currently expanding my skills toward the MERN stack through
  real-world projects and an ongoing internship.
</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <a
  href={resumePdf}
  download
  className="group px-8 py-4 bg-slate-800 rounded-full font-semibold hover:bg-slate-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
>
  <Download className="w-5 h-5 group-hover:animate-bounce" />
  <span>Download Resume</span>
</a>

              </div>
              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start pt-4">
                {[
  {
    Icon: Github,
    color: 'hover:bg-cyan-500',
    delay: '0s',
    href: 'https://github.com/sr1-dev-1205'
  },
  {
    Icon: Linkedin,
    color: 'hover:bg-blue-500',
    delay: '0.1s',
    href: 'https://www.linkedin.com/in/sridhar1208-dev'
  },
  {
    Icon: Mail,
    color: 'hover:bg-purple-500',
    delay: '0.2s',
    href: 'mailto:sridhars200612@gmail.com'
  }
]
.map(({ Icon, color, delay, href }, index) => (
                  <a
  key={index}
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Open ${href.includes('github') ? 'GitHub' : href.includes('linkedin') ? 'LinkedIn' : 'Email'} profile`}
  className={`w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center ${color} transform hover:scale-110 hover:rotate-12 transition-all duration-300 animate-fadeInUp`}
  style={{ animationDelay: delay }}
>

                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 bg-slate-800 rounded-2xl overflow-hidden border-4 border-slate-700 group-hover:border-cyan-500 transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-2">
                 <img loading="lazy"
  src={profileImg}
  alt="Sridhar Profile"
  className="w-full h-full object-cover rounded-2xl"
/>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-0.5rem] sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInUp">
              <p className="text-gray-400 text-lg leading-relaxed">
  I am a 3rd year Computer Science Engineering student with a strong interest in frontend
  development and modern web technologies. I enjoy building responsive, user-friendly
  interfaces that focus on clean design and smooth user experience.
</p>

<p className="text-gray-400 text-lg leading-relaxed">
  Currently, I am gaining practical experience as a Frontend Developer Intern, where I work
  with React and Tailwind CSS to develop and improve web interfaces. Alongside my internship,
  I actively build academic and personal projects to strengthen my skills and industry readiness.
</p>

              <div className="grid grid-cols-2 gap-6 pt-4">
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
    <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
    <div className="text-gray-400">Projects Built</div>
  </div>

  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
    <div className="text-3xl font-bold text-blue-400 mb-2">Sep 2024</div>
    <div className="text-gray-400">Internship Started</div>
  </div>
</div>

            </div>

            <div className="grid grid-cols-2 gap-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {[
   {
    Icon: Brush,
    title: 'Clean UI',
    desc: 'Readable and well-structured frontend code',
    proof: 'Used across all major projects',
    gradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
    border: 'border-cyan-500/20 hover:border-cyan-500',
    iconColor: 'text-cyan-400',
  },
  {
    Icon: Layout,
    title: 'Frontend Focus',
    desc: 'Specialized in modern frontend development',
    proof: 'React • TypeScript • Tailwind CSS',
    gradient: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10',
    border: 'border-blue-500/20 hover:border-blue-500',
    iconColor: 'text-blue-400',
  },
  {
    Icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Layouts optimized for all screen sizes',
    proof: 'Mobile-first approach',
    gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/20 hover:border-purple-500',
    iconColor: 'text-purple-400',
  },
  {
    Icon: TrendingUp,
    title: 'Continuous Learning',
    desc: 'Improving skills through practice',
    proof: 'Internship + academic projects',
    gradient: 'bg-gradient-to-br from-pink-500/10 to-cyan-500/10',
    border: 'border-pink-500/20 hover:border-pink-500',
    iconColor: 'text-pink-400',
  },
]
.map((item, index) => (
                <div
    key={index}
    className={`p-6 rounded-xl border border-slate-700
    transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group
    ${item.gradient} ${item.border}`}
  >
    <item.Icon
      className={`w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}
    />

    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

    <p className="text-gray-400 text-sm mb-3">{item.desc}</p>

    <div className="flex items-center gap-2 text-xs text-cyan-400/80">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
      <span>{item.proof}</span>
    </div>
  </div>
))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl top-20 left-20 animate-float"></div>
          <div className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl bottom-20 right-20 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Technologies I work with to build modern, scalable web applications
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'HTML', category: 'Frontend', color: 'from-green-400 to-emerald-500', svg: 'M13 2L3 9l10 7 10-7-10-7z M13 16L3 23l10 7 10-7-10-7z' },
              { name: 'CSS', category: 'Frontend', color: 'from-gray-400 to-slate-500', svg: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' },
              { name: 'React', category: 'Frontend', color: 'from-cyan-400 to-blue-500', svg: 'M12 2a10 10 0 110 20 10 10 0 010-20z M12 6a6 6 0 100 12 6 6 0 000-12z' },
              { name: 'Node.js', category: 'Backend', color: 'from-green-500 to-lime-500', svg: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' },
              { name: 'JavaScript', category: 'Language', color: 'from-yellow-400 to-orange-500', svg: 'M3 3h18v18H3V3z M12 12h6v6h-6v-6z' },
              { name: 'TypeScript', category: 'Language', color: 'from-blue-500 to-blue-600', svg: 'M3 3h18v18H3V3z M8 8v8h8V8H8z' },
              { name: 'Tailwind CSS', category: 'Styling', color: 'from-cyan-400 to-teal-500', svg: 'M12 2L2 7v5c0 7 10 10 10 10s10-3 10-10V7L12 2z' },
              { name: 'Git', category: 'Version Control', color: 'from-orange-500 to-red-500', svg: 'M12 2L3 7v10l9 5 9-5V7l-9-5z M12 12l-6 3V9l6-3 6 3v6l-6-3z' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-transparent transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 group-hover:scale-125 shadow-lg`}>
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={tech.svg} />
                    </svg>
                  </div>

                  {/* Tech Name */}
                  <div className="text-center">
                    <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors duration-300">
                      {tech.category}
                    </p>
                  </div>
                </div>

                {/* Animated particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-6 text-gray-300">Also Familiar With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['npm', 'VS Code', 'Netlify', 'Vercel', 'C Programming', 'Python', 'Vite', 'Java', 'AI Tools', 'Figma'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110 cursor-pointer animate-fadeInUp"
                  style={{ animationDelay: `${0.7 + index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
<section id="experience" className="min-h-screen flex items-center justify-center py-20 relative">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 animate-fadeInUp">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        Experience{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Timeline
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
      <p className="text-gray-400 mt-6">
        Internship and academic project experience
      </p>
    </div>

    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block"></div>

      <div className="space-y-12">

        {/* Internship Experience */}
        <div className="relative animate-fadeInUp">
          <div className="md:flex items-center">
            {/* Left */}
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center justify-end gap-2 text-cyan-400 mb-2 md:justify-end justify-start">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Sep 2025 - Present</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 md:text-right text-left">
                  Frontend Developer Intern
                </h3>
                <p className="text-blue-400 mb-3 md:text-right text-left">
                  Internship Experience
                </p>
                <p className="text-gray-400 text-sm md:text-right text-left">
                  Worked on building responsive user interfaces using React and Tailwind CSS.
                  Collaborated with team members to implement UI features, fix layout issues,
                  and follow modern frontend development best practices.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 md:justify-end justify-start">
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">
                    JavaScript
                  </span>
                </div>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
              <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 z-10 animate-pulse"></div>
            </div>

            {/* Right */}
            <div className="md:w-1/2 md:pl-12"></div>
          </div>
        </div>

        {/* College Project Experience */}
        <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="md:flex items-center">
            {/* Left */}
            <div className="md:w-1/2 md:pr-12"></div>

            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 z-10 animate-pulse"></div>
            </div>

            {/* Right */}
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">5 Months</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Academic Project – College Website Development
                </h3>
                <p className="text-purple-400 mb-3">
                  Hindusthan Institute of Technology
                </p>
                <p className="text-gray-400 text-sm">
                  Contributed to the development of the college website as part of a
                  student team under faculty guidance. Focused on building responsive
                  layouts, implementing navigation, and maintaining UI consistency.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">
                    React
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs text-teal-400">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
  title: 'College Website – Hindusthan Institute of Technology',
  description: 'Developed the complete frontend of the college website...',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  gradient: 'from-cyan-500 to-blue-500',
  live: 'https://hitechcse.netlify.app',
  image: collegeImg
},
{
  title: 'Aarogya Jal – Water Contamination Prevention System',
  description: 'Built a prototype solution for Smart India Hackathon...',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  gradient: 'from-blue-500 to-purple-500',
  live: 'https://pixel-pirates-beta.vercel.app',
  image: aarogyaImg
},
{
  title: 'Personal Portfolio Website',
  description: 'Designed and developed a responsive personal portfolio...',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  gradient: 'from-purple-500 to-pink-500',
  live: 'https://sridhar-dev-portfolio.vercel.app',
  image: portfolioImg
}

            ].map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="p-6 space-y-4 relative z-10">
                  <div className="w-full h-48 rounded-lg overflow-hidden relative group">
  {/* Gradient overlay (keeps your theme look) */}
  <div
    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`}
  ></div>

  {/* Project image */}
  <img loading="lazy"
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
  />
</div>

                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 rounded-full text-xs text-cyan-400 transition-all duration-300"

                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full py-3 block text-center bg-slate-700 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 font-semibold transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/50"
>
  View Project
</a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6">
              Have a project in mind? Let's work together to create something amazing!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
  {
    Icon: Mail,
    title: 'Email',
    info: 'sridhars200612@gmail.com',
    border: 'hover:border-emerald-500',
    icon: 'text-emerald-400',
    href: 'mailto:sridhars200612@gmail.com'
  },
  {
    Icon: Github,
    title: 'GitHub',
    info: 'github.com/sr1-dev-1205',
    border: 'hover:border-gray-400',
    icon: 'text-gray-300',
    href: 'https://github.com/sr1-dev-1205'
  },
  {
    Icon: Linkedin,
    title: 'LinkedIn',
    info: 'linkedin.com/in/sridhar1208-dev',
    border: 'hover:border-blue-500',
    icon: 'text-blue-400',
    href: 'https://www.linkedin.com/in/sridhar1208-dev'
  }
]

.map((contact, index) => (
  <a
    key={contact.title}
    href={contact.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Contact via ${contact.title}`}
    className="block"
  >
    <div
      className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700 ${contact.border}
      transition-all duration-300 transform hover:scale-105 hover:-translate-y-2
      text-center animate-fadeInUp group`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <contact.Icon
        className={`w-12 h-12 ${contact.icon} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
      />
      <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
      <p className="text-gray-400 text-sm">{contact.info}</p>
    </div>
  </a>
))}
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {formStatus === 'success' && (
  <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 animate-fadeInUp">
    ✅ Thanks for reaching out! I’ll get back to you soon.
  </div>
)}

{formStatus === 'error' && (
  <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 animate-fadeInUp">
    ❌ Something went wrong. Please try again later.
  </div>
)}

           <form
  action="https://formspree.io/f/mjgvpajl"
  method="POST"
  onSubmit={handleContactSubmit}
  className="space-y-6"
>


              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input type="hidden" name="_subject" value="New message from Portfolio Website" />
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
  name="name"
  type="text"
  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 focus:scale-105"
  placeholder="Your name"
  required
/>

                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
  name="email"
  type="email"
  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 focus:scale-105"
  placeholder="your.email@example.com"
  required
/>

                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
  name="subject"
  type="text"
  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 focus:scale-105"
  placeholder="What's this about?"
/>

              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
  name="message"
  rows={6}
  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none focus:scale-105"
  placeholder="Your message..."
  required
></textarea>

              </div>
              <button
  type="submit"
  disabled={formStatus === 'loading'}
  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden
    ${
      formStatus === 'loading'
        ? 'bg-slate-600 cursor-not-allowed'
        : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105'
    }`}
>
  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
</button>

            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-4">
              {[
  {
    Icon: Github,
    href: 'https://github.com/sr1-dev-1205',
    label: 'GitHub'
  },
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/sridhar1208-dev',
    label: 'LinkedIn'
  },
  {
    Icon: Mail,
    href: 'mailto:sridhars200612@gmail.com',
    label: 'Email'
  }
].map(({ Icon, href, label }, index) => (
  <a
    key={index}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transform hover:scale-110 hover:rotate-12 transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
))}

            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Sridhar. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300 animate-fadeInUp group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
}

export default App;
