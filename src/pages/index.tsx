import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function CompactHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.compactHeader}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.profileSection}>
            <img
              className={styles.profilePhoto}
              src="https://avatars.githubusercontent.com/u/19519036?v=4"
              alt="Richard Borges"
            />
            <div className={styles.profileInfo}>
              <Heading as="h1" className={styles.name}>
                {siteConfig.title}
              </Heading>
              <p className={styles.tagline}>{siteConfig.tagline}</p>
            </div>
          </div>
          <div className={styles.quickContact}>
            <div className={styles.contactRow}>
              <span>📧 richard.borges@example.com</span>
              <span>📱 +1 (555) 123-4567</span>
            </div>
            <div className={styles.contactRow}>
              <span>📍 San Francisco, CA</span>
              <Link className={styles.portfolioLink} to="/docs/intro">
                View Portfolio 🚀
              </Link>
            </div>
            <div className={styles.socialLinks}>
              <Link
                to="https://linkedin.com/in/richardborges"
                className={styles.socialLink}
              >
                LinkedIn
              </Link>
              <Link
                to="https://github.com/richardborgesdev"
                className={styles.socialLink}
              >
                GitHub
              </Link>
              <Link
                to="https://richardborges.dev"
                className={styles.socialLink}
              >
                Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.resumeSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {title}
        </Heading>
        {children}
      </div>
    </section>
  );
}

function SkillBadge({ skill }: { skill: string }) {
  return <span className={styles.skillBadge}>{skill}</span>;
}

function ExperienceItem({
  title,
  company,
  location,
  period,
  description,
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}) {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.experienceHeader}>
        <h3 className={styles.jobTitle}>{title}</h3>
        <span className={styles.period}>{period}</span>
      </div>
      <div className={styles.companyInfo}>
        <strong>{company}</strong> • {location}
      </div>
      <ul className={styles.achievements}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function EducationItem({
  degree,
  institution,
  location,
  period,
  details,
}: {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}) {
  return (
    <div className={styles.educationItem}>
      <div className={styles.experienceHeader}>
        <h3 className={styles.degree}>{degree}</h3>
        <span className={styles.period}>{period}</span>
      </div>
      <div className={styles.companyInfo}>
        <strong>{institution}</strong> • {location}
      </div>
      {details && (
        <ul className={styles.details}>
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ProjectItem({
  name,
  description,
  technologies,
  link,
  github,
}: {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}) {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectHeader}>
        <h3 className={styles.projectName}>{name}</h3>
        <div className={styles.projectLinks}>
          {link && (
            <Link to={link} className={styles.projectLink}>
              🔗 Live Demo
            </Link>
          )}
          {github && (
            <Link to={github} className={styles.projectLink}>
              💻 GitHub
            </Link>
          )}
        </div>
      </div>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <SkillBadge key={index} skill={tech} />
        ))}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  // Sample data - replace with your actual information
  const skills = {
    frontend: [
      'React',
      'TypeScript',
      'Next.js',
      'Vue.js',
      'HTML/CSS',
      'Tailwind CSS',
    ],
    backend: [
      'Node.js',
      'Python',
      'Express.js',
      'Django',
      'PostgreSQL',
      'MongoDB',
    ],
    tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack'],
    soft: [
      'Team Leadership',
      'Problem Solving',
      'Communication',
      'Agile/Scrum',
    ],
  };

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Company Inc.',
      location: 'Remote',
      period: 'Jan 2022 - Present',
      description: [
        'Led development of React-based web applications serving 10,000+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with product team to define technical requirements',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Solutions',
      location: 'San Francisco, CA',
      period: 'Jun 2020 - Dec 2021',
      description: [
        'Built and maintained RESTful APIs using Node.js and Express',
        'Developed responsive web interfaces with React and TypeScript',
        'Optimized database queries improving application performance by 40%',
        'Participated in agile development process and sprint planning',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'City, State',
      period: '2016 - 2020',
      details: [
        'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
        'Relevant Coursework: Data Structures, Algorithms, Software Engineering',
        "Dean's List for 6 semesters",
      ],
    },
  ];

  const projects = [
    {
      name: 'E-commerce Platform',
      description:
        'Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Docker'],
      link: 'https://demo-ecommerce.com',
      github: 'https://github.com/username/ecommerce-platform',
    },
    {
      name: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['Vue.js', 'Firebase', 'Socket.io', 'Vuetify'],
      link: 'https://task-manager-demo.com',
      github: 'https://github.com/username/task-manager',
    },
    {
      name: 'Weather Dashboard',
      description:
        'Interactive weather dashboard with location-based forecasts and historical data visualization.',
      technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS'],
      github: 'https://github.com/username/weather-dashboard',
    },
  ];

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Richard Borges - Software Developer Portfolio"
    >
      <CompactHeader />
      <main>
        {/* Professional Summary */}
        <ResumeSection title="Professional Summary">
          <div className={styles.summary}>
            <p>
              Passionate Full Stack Developer with 4+ years of experience
              building scalable web applications and leading cross-functional
              teams. Expertise in React, Node.js, and cloud technologies. Proven
              track record of delivering high-quality solutions that improve
              user experience and drive business growth. Strong advocate for
              clean code, best practices, and continuous learning.
            </p>
          </div>
        </ResumeSection>

        {/* Technical Skills */}
        <ResumeSection title="Technical Skills">
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend Development</h3>
              <div className={styles.skillsList}>
                {skills.frontend.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3>Backend Development</h3>
              <div className={styles.skillsList}>
                {skills.backend.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3>Tools & Technologies</h3>
              <div className={styles.skillsList}>
                {skills.tools.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3>Soft Skills</h3>
              <div className={styles.skillsList}>
                {skills.soft.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </ResumeSection>

        {/* Professional Experience */}
        <ResumeSection title="Professional Experience">
          <div className={styles.experienceList}>
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </ResumeSection>

        {/* Featured Projects */}
        <ResumeSection title="Featured Projects">
          <div className={styles.projectsList}>
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          <div className={styles.educationList}>
            {education.map((edu, index) => (
              <EducationItem
                key={index}
                degree={edu.degree}
                institution={edu.institution}
                location={edu.location}
                period={edu.period}
                details={edu.details}
              />
            ))}
          </div>
        </ResumeSection>

        {/* Certifications */}
        <ResumeSection title="Certifications & Achievements">
          <div className={styles.certifications}>
            <ul className={styles.certificationsList}>
              <li>AWS Certified Solutions Architect - Associate (2023)</li>
              <li>Google Cloud Professional Developer (2022)</li>
              <li>React Developer Certification - Meta (2022)</li>
              <li>
                Speaker at TechConf 2023: &quot;Building Scalable React
                Applications&quot;
              </li>
              <li>Open Source Contributor - 500+ GitHub contributions</li>
            </ul>
          </div>
        </ResumeSection>
      </main>
    </Layout>
  );
}
