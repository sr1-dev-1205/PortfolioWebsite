import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, Code2, ArrowUp, Briefcase, Calendar } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Cursor follower */}
      <div
        className="fixed pointer-events-none z-50 w-6 h-6 border-2 border-cyan-400 rounded-full transition-transform duration-200 ease-out hidden lg:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

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
                  Portfolio
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
                  Your Name
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 font-light">
                MERN Stack Developer
              </p>
              <p className="text-gray-500 max-w-lg">
                Building full-stack applications with MongoDB, Express, React, and Node.js.
                Passionate about creating scalable and efficient web solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group px-8 py-4 bg-slate-800 rounded-full font-semibold hover:bg-slate-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </button>
              </div>
              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start pt-4">
                {[
                  { Icon: Github, color: 'hover:bg-cyan-500', delay: '0s' },
                  { Icon: Linkedin, color: 'hover:bg-blue-500', delay: '0.1s' },
                  { Icon: Mail, color: 'hover:bg-purple-500', delay: '0.2s' }
                ].map(({ Icon, color, delay }, index) => (
                  <a
                    key={index}
                    href="#"
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
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-float">
                        <Code2 className="w-16 h-16 text-white" />
                      </div>
                      <p className="text-gray-400 text-sm">Your image here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
                I'm a passionate MERN stack developer with a keen eye for design and a love for creating
                seamless digital experiences. With expertise in modern web technologies, I transform ideas
                into elegant, functional solutions.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My journey in web development started several years ago, and since then, I've been dedicated
                to continuous learning and staying up-to-date with the latest industry trends. I believe in
                writing clean, maintainable code and creating user-centered designs.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {[
                { Icon: Code2, color: 'cyan', title: 'Clean Code', desc: 'Writing maintainable code', gradient: 'from-cyan-500/10 to-blue-500/10' },
                { Icon: Code2, color: 'blue', title: 'Full Stack', desc: 'MERN stack expertise', gradient: 'from-blue-500/10 to-purple-500/10' },
                { Icon: Code2, color: 'purple', title: 'Responsive', desc: 'Mobile-first approach', gradient: 'from-purple-500/10 to-pink-500/10' },
                { Icon: Code2, color: 'pink', title: 'Fast', desc: 'Optimized performance', gradient: 'from-pink-500/10 to-cyan-500/10' }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl border border-${item.color}-500/20 hover:border-${item.color}-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group`}
                >
                  <item.Icon className={`w-12 h-12 text-${item.color}-400 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
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
              { name: 'MongoDB', category: 'Database', color: 'from-green-400 to-emerald-500', svg: 'M13 2L3 9l10 7 10-7-10-7z M13 16L3 23l10 7 10-7-10-7z' },
              { name: 'Express.js', category: 'Backend', color: 'from-gray-400 to-slate-500', svg: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' },
              { name: 'React', category: 'Frontend', color: 'from-cyan-400 to-blue-500', svg: 'M12 2a10 10 0 110 20 10 10 0 010-20z M12 6a6 6 0 100 12 6 6 0 000-12z' },
              { name: 'Node.js', category: 'Backend', color: 'from-green-500 to-lime-500', svg: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' },
              { name: 'JavaScript', category: 'Language', color: 'from-yellow-400 to-orange-500', svg: 'M3 3h18v18H3V3z M12 12h6v6h-6v-6z' },
              { name: 'TypeScript', category: 'Language', color: 'from-blue-500 to-blue-600', svg: 'M3 3h18v18H3V3z M8 8v8h8V8H8z' },
              { name: 'Tailwind CSS', category: 'Styling', color: 'from-cyan-400 to-teal-500', svg: 'M12 2L2 7v5c0 7 10 10 10 10s10-3 10-10V7L12 2z' },
              { name: 'Git', category: 'Version Control', color: 'from-orange-500 to-red-500', svg: 'M12 2L3 7v10l9 5 9-5V7l-9-5z M12 12l-6 3V9l6-3 6 3v6l-6-3z' },
              { name: 'REST API', category: 'Integration', color: 'from-purple-400 to-pink-500', svg: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2M3 7h18' },
              { name: 'Redux', category: 'State Management', color: 'from-purple-500 to-violet-600', svg: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' },
              { name: 'JWT', category: 'Authentication', color: 'from-pink-500 to-rose-500', svg: 'M12 2a10 10 0 110 20 10 10 0 010-20z M12 6v12M6 12h12' },
              { name: 'Postman', category: 'API Testing', color: 'from-orange-400 to-orange-600', svg: 'M12 2L2 7v10l10 5 10-5V7l-10-5z' }
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
              {['Docker', 'AWS', 'Firebase', 'GraphQL', 'Mongoose', 'Webpack', 'Vite', 'Jest', 'Socket.io', 'Next.js'].map((skill, index) => (
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
              Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6">
              My professional journey and internship experiences
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {/* Placeholder Experience 1 */}
              <div className="relative animate-fadeInUp">
                <div className="md:flex items-center">
                  {/* Left side */}
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                      <div className="flex items-center justify-end gap-2 text-cyan-400 mb-2 md:justify-end justify-start">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">2024 - Present</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 md:text-right text-left">
                        Senior MERN Stack Developer
                      </h3>
                      <p className="text-blue-400 mb-3 md:text-right text-left">Company Name</p>
                      <p className="text-gray-400 text-sm md:text-right text-left">
                        Led development of full-stack applications using MongoDB, Express, React, and Node.js.
                        Implemented RESTful APIs and managed database architecture.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4 md:justify-end justify-start">
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">React</span>
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">Node.js</span>
                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400">MongoDB</span>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 z-10 animate-pulse"></div>
                  </div>

                  {/* Right side */}
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>

              {/* Placeholder Experience 2 */}
              <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="md:flex items-center">
                  {/* Left side */}
                  <div className="md:w-1/2 md:pr-12"></div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 z-10 animate-pulse"></div>
                  </div>

                  {/* Right side */}
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">2023 - 2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        Full Stack Developer Intern
                      </h3>
                      <p className="text-purple-400 mb-3">Tech Company</p>
                      <p className="text-gray-400 text-sm">
                        Developed and maintained web applications, collaborated with senior developers,
                        and gained hands-on experience with modern development practices.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">JavaScript</span>
                        <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs text-pink-400">Express</span>
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">React</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add More Experience Placeholder */}
              <div className="relative animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="md:flex items-center">
                  {/* Left side */}
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-slate-800/30 p-6 rounded-xl border-2 border-dashed border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                      <div className="flex items-center justify-center gap-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                        <Briefcase className="w-6 h-6" />
                        <span className="text-lg font-semibold">Add your experience here</span>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-slate-700 rounded-full border-4 border-slate-950 z-10"></div>
                  </div>

                  {/* Right side */}
                  <div className="md:w-1/2 md:pl-12"></div>
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
                title: 'E-Commerce Platform',
                description: 'Full-stack MERN application with payment integration and admin dashboard',
                tech: ['React', 'Node.js', 'MongoDB'],
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                title: 'Task Management App',
                description: 'Real-time collaborative tool with WebSocket integration',
                tech: ['React', 'Express', 'Socket.io'],
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Social Media Dashboard',
                description: 'Analytics platform with interactive charts and data visualization',
                tech: ['React', 'Node.js', 'Redux'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'REST API Service',
                description: 'Scalable backend API with JWT authentication and rate limiting',
                tech: ['Express', 'MongoDB', 'JWT'],
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                title: 'Blog Platform',
                description: 'Full-featured blogging platform with rich text editor',
                tech: ['React', 'Node.js', 'MongoDB'],
                gradient: 'from-rose-500 to-orange-500'
              },
              {
                title: 'Real-time Chat App',
                description: 'Instant messaging application with file sharing capabilities',
                tech: ['React', 'Socket.io', 'Express'],
                gradient: 'from-orange-500 to-cyan-500'
              }
            ].map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="p-6 space-y-4 relative z-10">
                  <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 relative overflow-hidden`}>
                    <Code2 className="w-16 h-16 text-white opacity-50 group-hover:scale-125 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 rounded-full text-xs text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border group-hover:border-cyan-500/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-slate-700 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 font-semibold transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                    View Project
                  </button>
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
              { Icon: Mail, title: 'Email', info: 'your.email@example.com', color: 'cyan' },
              { Icon: Github, title: 'GitHub', info: 'github.com/yourusername', color: 'blue' },
              { Icon: Linkedin, title: 'LinkedIn', info: 'linkedin.com/in/yourprofile', color: 'purple' }
            ].map((contact, index) => (
              <div
                key={contact.title}
                className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-${contact.color}-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 text-center animate-fadeInUp group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <contact.Icon className={`w-12 h-12 text-${contact.color}-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                <p className="text-gray-400 text-sm">{contact.info}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 focus:scale-105"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 focus:scale-105"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 focus:scale-105"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none focus:scale-105"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transform hover:scale-110 hover:rotate-12 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Your Name. All rights reserved.
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
