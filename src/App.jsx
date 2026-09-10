import { useEffect, useState } from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

import {
  UserRound,
  CalendarDays,
  Flag,
  Mars,
  Heart,
  Languages,
  MapPin,
  Mail,
  Send,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  BookOpen,
  Lightbulb,
  HeartHandshake,
  Code2,
  Monitor,
  Smartphone,
  Palette,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  /* =========================================================
     ACTIVE SECTION ON SCROLL
  ========================================================= */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     SKILLS
  ========================================================= */

  const skills = [
    {
      title: "Microsoft Office",
      percent: 90,
      className: "office",
      logos: [
        {
          src:
            "https://api.iconify.design/mdi:microsoft-word.svg?color=%232B579A",
          alt: "Microsoft Word",
        },
        {
          src:
            "https://api.iconify.design/mdi:microsoft-excel.svg?color=%23217646",
          alt: "Microsoft Excel",
        },
        {
          src:
            "https://api.iconify.design/mdi:microsoft-powerpoint.svg?color=%23B7472A",
          alt: "Microsoft PowerPoint",
        },
      ],
    },

    {
      title: "Adobe Photoshop",
      percent: 80,
      className: "photoshop",
      logos: [
        {
          src:
            "https://api.iconify.design/cib:adobe-photoshop.svg?color=%2331A8FF",
          alt: "Adobe Photoshop",
        },
      ],
    },

    {
      title: "Web Development",
      percent: 75,
      className: "web",
      logos: [
        {
          src:
            "https://cdn.simpleicons.org/html5/E34F26",
          alt: "HTML5",
        },
        {
          src:
            "https://cdn.simpleicons.org/css/1572B6",
          alt: "CSS3",
        },
        {
          src:
            "https://cdn.simpleicons.org/javascript/F7DF1E",
          alt: "JavaScript",
        },
      ],
    },

    {
      title: "Programming",
      percent: 75,
      className: "programming",
      logos: [
        {
          src:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
          alt: "C#",
        },
        {
          src:
            "https://cdn.simpleicons.org/dotnet/512BD4",
          alt: ".NET",
        },
        {
          src:
            "https://cdn.simpleicons.org/php/777BB4",
          alt: "PHP",
        },
        {
          src:
            "https://cdn.simpleicons.org/laravel/FF2D20",
          alt: "Laravel",
        },
      ],
    },

    {
      title: "Mobile App Development",
      percent: 70,
      className: "mobile",
      logos: [
        {
          src:
            "https://cdn.simpleicons.org/flutter/02569B",
          alt: "Flutter",
        },
        {
          src:
            "https://cdn.simpleicons.org/dart/0175C2",
          alt: "Dart",
        },
      ],
    },
  ];

  /* =========================================================
     PERSONAL INFORMATION
  ========================================================= */

  const personalInfo = [
    {
      icon: <UserRound size={19} />,
      label: "Full Name",
      value: "Svay Mom",
    },
    {
      icon: <CalendarDays size={19} />,
      label: "Date of Birth",
      value: "03 October 2004",
    },
    {
      icon: <Flag size={19} />,
      label: "Nationality",
      value: "Cambodian",
    },
    {
      icon: <Mars size={19} />,
      label: "Gender",
      value: "Male",
    },
    {
      icon: <Heart size={19} />,
      label: "Marital Status",
      value: "Single",
    },
    {
      icon: <Languages size={19} />,
      label: "Languages",
      value: "Khmer, English",
    },
    {
      icon: <MapPin size={19} />,
      label: "Location",
      value: "Cambodia",
    },
    {
      icon: <Mail size={19} />,
      label: "Email",
      value: "svaymom@example.com",
    },
  ];

  /* =========================================================
     INTERESTS
  ========================================================= */

  const interests = [
    {
      icon: <HeartHandshake size={22} />,
      title: "Volunteering",
      text:
        "Participating in humanitarian and charity activities.",
    },
    {
      icon: <Users size={22} />,
      title: "Community Development",
      text:
        "Supporting community development and social work.",
    },
    {
      icon: <BookOpen size={22} />,
      title: "Education",
      text:
        "Teaching and sharing knowledge with students.",
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Learning",
      text:
        "Continuously learning new technologies and skills.",
    },
  ];

  /* =========================================================
     STRENGTHS
  ========================================================= */

  const strengths = [
    "Creative",
    "Teamwork",
    "Hardworking",
    "Respectful",
    "Responsible",
    "Patient",
    "Flexible",
    "Open-minded",
    "Diligent",
  ];

  /* =========================================================
     PROJECTS
  ========================================================= */

  const projects = [
    {
      number: "01",
      icon: <Code2 size={28} />,
      title: "Personal Portfolio",
      text:
        "A professional portfolio website designed to showcase my skills, education, experience and projects.",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      number: "02",
      icon: <Monitor size={28} />,
      title: "KhmerShop",
      text:
        "An online shopping application concept with product listing, category browsing and search functionality.",
      tags: ["Flutter", "REST API", "JSON"],
    },
    {
      number: "03",
      icon: <Smartphone size={28} />,
      title: "Web Application",
      text:
        "Web application projects developed to practice modern programming, database and API development.",
      tags: ["C#", "ASP.NET", "SQL Server"],
    },
  ];

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <a
            href="#home"
            className="logo"
            onClick={() => handleNavClick("home")}
          >
            <span className="logo-dot"></span>
            <span>Svay Mom</span>
          </a>

          {/* Navigation */}
          <nav
            className={
              menuOpen
                ? "nav-links open"
                : "nav-links"
            }
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  activeSection === item.id
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handleNavClick(item.id)
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">

            <button
              className="theme-btn"
              onClick={() =>
                setDarkMode((prev) => !prev)
              }
              aria-label="Toggle dark mode"
              title="Toggle theme"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>

          </div>
        </div>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero" id="home">
        <div className="hero-container">

          {/* Hero Content */}
          <div className="hero-content">

            <div className="hero-small-title">
              <span></span>
              Hello, I&apos;m
            </div>

            <h1>
              Svay <span>Mom</span>
            </h1>

            <h2>
              IT Student
              <span>•</span>
              Teacher
              <span>•</span>
              Learner
            </h2>

            <p>
              I am an Information Technology student
              passionate about technology, education,
              web development and creating useful
              digital solutions.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">

              <a
                href="#contact"
                className="primary-btn"
                onClick={() =>
                  handleNavClick("contact")
                }
              >
                Contact Me
                <Send size={16} />
              </a>

              <a
                href="#projects"
                className="secondary-btn"
              >
                View My Work
                <ChevronRight size={16} />
              </a>

            </div>

            {/* Professional Tags */}
            <div className="hero-tags">
              <span>Web Development</span>
              <span>IT Student</span>
              <span>Teacher</span>
            </div>

          </div>


          {/* Hero Image */}
          <div className="hero-image-area">

            <div className="hero-circle"></div>

            <div className="hero-image-wrapper">
              <img
                src={profile}
                alt="Svay Mom"
                className="hero-profile"
              />
            </div>

            {/* Decorative Words */}
            <div className="hero-decoration">
              <span>Dream</span>
              <span>Learn</span>
              <span>Build</span>
              <span>Grow</span>
            </div>

            {/* Quote */}
            <div className="hero-quote">
              <span>&quot;</span>
              Learning today,
              <br />
              building tomorrow.
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        className="section about-section"
        id="about"
      >
        <div className="container">

          <div className="section-heading">
            <span className="section-label">
              ABOUT ME
            </span>

            <h2>
              Get to <span>Know Me</span>
            </h2>

            <p>
              A little information about my background,
              personality and goals.
            </p>
          </div>


          <div className="about-grid">

            {/* About Text */}
            <div className="about-text">

              <h3>
                Passionate About{" "}
                <span>
                  Technology & Education
                </span>
              </h3>

              <p>
                I am currently pursuing a Bachelor&apos;s
                degree in Information Technology. I enjoy
                learning new technologies and developing
                websites, web applications and mobile
                applications.
              </p>

              <p>
                I also have experience working as a teacher,
                where I teach computer skills and English.
                I enjoy sharing knowledge and helping
                students improve their digital skills.
              </p>

              <p>
                My goal is to continue improving my technical
                knowledge, communication skills and
                professional experience while creating
                useful solutions for people and communities.
              </p>

              <a
                href="#contact"
                className="outline-btn"
                onClick={() =>
                  handleNavClick("contact")
                }
              >
                Let&apos;s Connect
                <ChevronRight size={16} />
              </a>

            </div>


            {/* Personal Information */}
            <div className="personal-card">

              <div className="personal-card-header">

                <div className="mini-icon">
                  <UserRound size={20} />
                </div>

                <div>
                  <h3>Personal Information</h3>
                  <p>
                    Basic information about me
                  </p>
                </div>

              </div>


              <div className="personal-grid">

                {personalInfo.map(
                  (item, index) => (
                    <div
                      className="personal-item"
                      key={index}
                    >

                      <div className="personal-icon">
                        {item.icon}
                      </div>

                      <div>
                        <small>
                          {item.label}
                        </small>

                        <strong>
                          {item.value}
                        </strong>
                      </div>

                    </div>
                  )
                )}

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          EDUCATION & EXPERIENCE
      ===================================================== */}

      <section
        className="section light-section"
        id="education"
      >
        <div className="container">

          <div className="section-heading">
            <span className="section-label">
              MY JOURNEY
            </span>

            <h2>
              Education &{" "}
              <span>Experience</span>
            </h2>

            <p>
              My academic background and professional
              experience.
            </p>
          </div>


          <div className="journey-grid">

            {/* EDUCATION */}
            <div className="journey-column">

              <div className="column-title">

                <div className="title-icon">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <span>EDUCATION</span>
                  <h3>
                    Academic Background
                  </h3>
                </div>

              </div>


              <div className="timeline">

                {/* University */}
                <div className="timeline-item">

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    <span className="date-badge">
                      2022 – Present
                    </span>

                    <h4>
                      Bachelor of Information
                      Technology
                    </h4>

                    <h5>University</h5>

                    <p>
                      Currently studying Information
                      Technology and developing skills
                      in programming, web development,
                      databases and software development.
                    </p>

                    <span className="status">
                      <CheckCircle2 size={14} />
                      Year 4 – In Progress
                    </span>

                  </div>
                </div>


                {/* High School */}
                <div className="timeline-item">

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    <span className="date-badge">
                      2018 – 2021
                    </span>

                    <h4>
                      High School – Bac II
                    </h4>

                    <h5>High School</h5>

                    <p>
                      Completed upper secondary
                      education and obtained the
                      Cambodian Bac II qualification.
                    </p>

                  </div>
                </div>


                {/* Secondary */}
                <div className="timeline-item">

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    <span className="date-badge">
                      2015 – 2017
                    </span>

                    <h4>
                      Secondary School
                    </h4>

                    <h5>
                      Secondary Education
                    </h5>

                    <p>
                      Completed secondary education
                      and developed a strong foundation
                      for further studies.
                    </p>

                  </div>
                </div>

              </div>
            </div>


            {/* EXPERIENCE */}
            <div
              className="journey-column"
              id="experience"
            >

              <div className="column-title">

                <div className="title-icon">
                  <BriefcaseBusiness size={22} />
                </div>

                <div>
                  <span>EXPERIENCE</span>
                  <h3>
                    Work Experience
                  </h3>
                </div>

              </div>


              <div className="timeline">

                {/* Teacher */}
                <div className="timeline-item">

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    <span className="date-badge">
                      2025 – 2026
                    </span>

                    <h4>Teacher</h4>

                    <h5>
                      Computer & Foreign
                      Language Center
                    </h5>

                    <p>
                      Taught basic computer skills
                      and English language, prepared
                      lessons, supported students and
                      helped them improve their digital
                      knowledge.
                    </p>

                    <div className="job-tags">
                      <span>Teaching</span>
                      <span>Computer</span>
                      <span>English</span>
                    </div>

                  </div>
                </div>


                {/* Credit Officer */}
                <div className="timeline-item">

                  <div className="timeline-dot"></div>

                  <div className="timeline-content">

                    <span className="date-badge">
                      2022 – 2023
                    </span>

                    <h4>
                      Credit Officer
                    </h4>

                    <h5>
                      Prakad Microfinance
                      Institution
                    </h5>

                    <p>
                      Evaluated loan applications,
                      provided financial advice,
                      managed loan documentation
                      and followed up on loan
                      repayments.
                    </p>

                    <div className="job-tags">
                      <span>Finance</span>
                      <span>
                        Customer Service
                      </span>
                      <span>
                        Documentation
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        className="section skills-section"
        id="skills"
      >
        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              MY SKILLS
            </span>

            <h2>
              Skills &{" "}
              <span>Technologies</span>
            </h2>

            <p>
              Technologies and tools that I have
              learned and practiced.
            </p>

          </div>


          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                className="skill-card"
                key={index}
              >

                <div
                  className={`skill-logos ${skill.className}-logos`}
                >

                  {skill.logos.map(
                    (logo, logoIndex) => (

                      <img
                        key={logoIndex}
                        src={logo.src}
                        alt={logo.alt}
                        title={logo.alt}
                        loading="lazy"
                      />

                    )
                  )}

                </div>


                <div className="skill-info">

                  <div>
                    <h3>
                      {skill.title}
                    </h3>

                    <span>
                      {skill.percent}%
                    </span>
                  </div>


                  <div className="progress">

                    <div
                      className="progress-bar"
                      style={{
                        width:
                          `${skill.percent}%`,
                      }}
                    ></div>

                  </div>

                </div>

              </div>

            ))}

          </div>


          <div className="skills-note">

            <Palette size={17} />

            <span>
              Continuously learning new technologies
              and improving my professional skills.
            </span>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTERESTS & STRENGTHS
      ===================================================== */}

      <section className="section light-section">
        <div className="container">

          <div className="two-column-section">

            {/* INTERESTS */}
            <div>

              <div className="small-section-heading">

                <span>
                  WHAT I LOVE
                </span>

                <h2>
                  My <strong>Interests</strong>
                </h2>

              </div>


              <div className="interest-list">

                {interests.map(
                  (interest, index) => (

                    <div
                      className="interest-card"
                      key={index}
                    >

                      <div className="interest-icon">
                        {interest.icon}
                      </div>

                      <div>

                        <h3>
                          {interest.title}
                        </h3>

                        <p>
                          {interest.text}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* STRENGTHS */}
            <div>

              <div className="small-section-heading">

                <span>
                  WHO I AM
                </span>

                <h2>
                  My <strong>Strengths</strong>
                </h2>

              </div>


              <div className="strengths-card">

                <p className="strength-intro">
                  Personal qualities that help me
                  learn, work and collaborate
                  effectively.
                </p>


                <div className="strength-list">

                  {strengths.map(
                    (strength, index) => (

                      <div
                        className="strength-item"
                        key={index}
                      >

                        <CheckCircle2 size={16} />

                        <span>
                          {strength}
                        </span>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        className="section projects-section"
        id="projects"
      >
        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              MY WORK
            </span>

            <h2>
              Featured <span>Projects</span>
            </h2>

            <p>
              Some projects that represent my
              learning and development journey.
            </p>

          </div>


          <div className="projects-grid">

            {projects.map(
              (project, index) => (

                <div
                  className="project-card"
                  key={index}
                >

                  <div className="project-top">

                    <div className="project-icon">
                      {project.icon}
                    </div>

                    <span className="project-number">
                      {project.number}
                    </span>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.text}
                  </p>


                  <div className="project-tags">

                    {project.tags.map(
                      (tag, tagIndex) => (

                        <span key={tagIndex}>
                          {tag}
                        </span>

                      )
                    )}

                  </div>


                  <a
                    href="#contact"
                    className="project-link"
                    onClick={() =>
                      handleNavClick("contact")
                    }
                  >
                    Learn More
                    <ExternalLink size={14} />
                  </a>

                </div>

              )
            )}

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        className="contact-section"
        id="contact"
      >
        <div className="container">

          <div className="contact-box">

            <div className="contact-content">

              <span className="section-label light-label">
                GET IN TOUCH
              </span>

              <h2>
                Let&apos;s Build Something
                <span>
                  {" "}Great Together.
                </span>
              </h2>

              <p>
                I am always interested in learning,
                collaborating and exploring new
                opportunities. Feel free to contact me.
              </p>


              <div className="contact-details">

                <div className="contact-detail">

                  <div>
                    <Mail size={19} />
                  </div>

                  <span>
                    svaymom@example.com
                  </span>

                </div>


                <div className="contact-detail">

                  <div>
                    <MapPin size={19} />
                  </div>

                  <span>
                    Cambodia
                  </span>

                </div>

              </div>


              <a
                href="mailto:svaymom@example.com"
                className="contact-btn"
              >
                Send Me a Message
                <Send size={16} />
              </a>

            </div>


            {/* Contact Decoration */}
            <div className="contact-decoration">

              <div className="contact-circle circle-one"></div>

              <div className="contact-circle circle-two"></div>


              <div className="contact-card-floating">

                <Code2 size={29} />

                <span>
                  Code
                </span>

              </div>


              <div className="contact-card-floating second">

                <Lightbulb size={29} />

                <span>
                  Learn
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="container footer-container">

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
              onClick={() =>
                handleNavClick("home")
              }
            >
              <span className="logo-dot"></span>
              Svay Mom
            </a>

            <p>
              IT Student • Teacher • Learner
            </p>

          </div>


          <div className="footer-links">

            {navItems.map((item) => (

              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() =>
                  handleNavClick(item.id)
                }
              >
                {item.label}
              </a>

            ))}

          </div>


          <div className="footer-social">

            <a
              href="#contact"
              aria-label="Contact"
              onClick={() =>
                handleNavClick("contact")
              }
            >
              <Mail size={16} />
            </a>

            <a
              href="#skills"
              aria-label="Skills"
              onClick={() =>
                handleNavClick("skills")
              }
            >
              <Code2 size={16} />
            </a>

            <a
              href="#projects"
              aria-label="Projects"
            >
              <Monitor size={16} />
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Svay Mom.
            All Rights Reserved.
          </p>

          <p>
            Designed & Built with React
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;