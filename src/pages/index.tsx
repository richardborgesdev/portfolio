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
              <span>📧 rbdevcontact@gmail.com</span>
              <span>📍 Joinville, Santa Catarina, Brazil</span>
            </div>
            <div className={styles.contactRow}>
              <span>🇺🇸 Duolingo English Fluency: Advanced</span>
              <Link className={styles.portfolioLink} to="/docs/intro">
                View Portfolio 🚀
              </Link>
            </div>
            <div className={styles.socialLinks}>
              <Link
                to="https://www.linkedin.com/in/richardborgesdev"
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

  const skills = {
    frontend: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
      'Vue.js',
      'Frontend Architecture',
    ],
    backend: [
      'Node.js',
      'Full Stack Development',
      'API Development',
      'Database Design',
      'System Architecture',
      'BPM/ECM/EQM',
    ],
    tools: ['Git', 'Scrum', 'Agile', 'Technical Leadership', 'Mentoring'],
    soft: [
      'Team Leadership',
      'Career Counseling',
      'Project Management',
      'Communication',
    ],
  };

  const experiences = [
    {
      title: 'Senior Frontend Engineer',
      company: 'Conta Azul',
      location: 'Joinville Region, Brazil',
      period: 'November 2019 - Present (6 years 1 month)',
      description: [
        'Development of Conta Azul Mais products for accountants and receivables anticipation',
        'Organization of company frontend demands (maintaining active forum among frontend developers, technical evolution backlog, career development suggestions)',
        'Technical leadership and mentoring of frontend developers',
        'Architecture and implementation of scalable solutions for financial products',
      ],
    },
    {
      title: 'Mentor',
      company: 'Codenation',
      location: 'Joinville, Santa Catarina',
      period: 'March 2020 - June 2020 (4 months)',
      description: [
        'Mentoring participants of AceleraDev, the developer and data scientist acceleration program by Codenation',
        'Monitoring and providing feedback to program participants',
        'Support for programming questions from mentees',
        'Career guidance and professional development',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'SoftExpert - Software for Excellence',
      location: 'Joinville Region, Brazil',
      period: 'March 2013 - November 2019 (6 years 9 months)',
      description: [
        'Development of document management (ECM), process management and automation (BPM), and enterprise quality (EQM) products',
        'Served as technical leader and scrum master for 1 year',
        'Full-stack development focused on enterprise solutions',
        'Team leadership and agile project management',
      ],
    },
  ];

  const education = [
    {
      degree: 'Postgraduate in Web Technologies and Innovations',
      institution: 'Centro Universitário Senac',
      location: 'Santa Catarina, Brazil',
      period: '2016 - 2018',
      details: [
        'Specialization in web technologies and applications',
        'Focus on modern frontend and backend development',
      ],
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'State University of Santa Catarina (UDESC)',
      location: 'Santa Catarina, Brazil',
      period: '2009 - 2013',
      details: [
        'Specialization in Collaborative Systems',
        'Research in cooperative systems with mobility support',
        'Scientific publication on cache coherence in cooperative systems',
      ],
    },
    {
      degree: 'Computer Technician',
      institution:
        'UNISOCIESC - Educational Society University of Santa Catarina',
      location: 'Santa Catarina, Brazil',
      period: '2007 - 2008',
      details: [
        'Technical training in hardware and software',
        'Solid foundation in computer fundamentals',
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
              I discovered my passion for working with computers since my first
              typing course (1999) at 8 years old, driven by curiosity about how
              things work and technological fascination. Today, graduated as a
              computer technician from Escola Técnica Tupy (2008), with a
              bachelor&apos;s degree in Computer Science from UDESC (2013) and a
              postgraduate degree in web technologies and applications from
              SENAC (2018), I remain passionate about the field and always
              inspired to find new ways to acquire knowledge.
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
              <li>Duolingo English Fluency: Advanced (estimated)</li>
              <li>
                Scientific Publication: &quot;EVALUATION OF A STRATEGY TO ENSURE
                CACHE COHERENCE AND PERCEPTION IN COOPERATIVE SYSTEMS WITH
                MOBILITY SUPPORT&quot;
              </li>
              <li>Certified Mentor - AceleraDev Codenation Program</li>
              <li>Experienced Technical Leader and Scrum Master</li>
              <li>Organizer of technical forums and career development</li>
            </ul>
          </div>
        </ResumeSection>
      </main>
    </Layout>
  );
}
