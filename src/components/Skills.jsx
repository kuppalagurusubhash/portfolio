import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Full Stack & Web Architecture',
    icon: '⚡',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'JavaScript (ES6+)', 'RESTful APIs', 'Tailwind CSS', 'HTML5 / CSS3'],
  },
  {
    title: 'Backend & Systems Programming',
    icon: '☕',
    skills: ['Java (Core & Advanced)', 'Python', 'FastAPI', 'Microservices Architecture', 'System Design', 'OOP', 'SQL & Databases'],
  },
  {
    title: 'Cloud, DevOps & Automation',
    icon: '☁️',
    skills: ['Docker', 'Jenkins', 'Microsoft Azure', 'Amazon Web Services (AWS)', 'CI/CD Pipelines', 'Linux Administration', 'Git / GitHub'],
  },
  {
    title: 'Security, AI & Core Engineering',
    icon: '🛡️',
    skills: ['Data Structures & Algorithms (DSA)', 'Cybersecurity & Threat Detection', 'Packet Analysis', 'Machine Learning Models', 'Agile & CSC Governance'],
  },
];

const languages = [
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Telugu', level: 'Native / Mother Tongue' },
  { name: 'Kannada', level: 'Fluent / Regional Working' },
  { name: 'Hindi', level: 'Conversational' },
  { name: 'Tamil', level: 'Working Proficiency' },
];

export default function Skills() {
  return (
    <section className={`section ${styles.skillsSection}`} id="skills">
      <div className="container">
        <p className="section-label" data-reveal="left">Technical Stack &amp; Capabilities</p>
        <h2 className={`section-heading ${styles.heading}`}>
          <span className="reveal-word-left" data-reveal="left">Engineering </span>
          <span className="reveal-word-right" data-reveal="right"><span>Arsenal</span></span>
        </h2>
        <p className="section-sub" data-reveal="up">
          A full-spectrum technical toolkit spanning scalable distributed services, cloud infrastructure, and modern frontend systems.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={styles.card}
              data-reveal={i % 2 === 0 ? 'left' : 'right'}
              data-delay={i * 80}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>

              <div className={styles.pills}>
                {cat.skills.map((s) => (
                  <span key={s} className={styles.pill}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Spoken Languages Strip */}
        <div className={styles.langBlock} data-reveal="up">
          <div className={styles.langHeader}>
            <span className={styles.langIcon}>🌐</span>
            <div>
              <h4 className={styles.langHeading}>Multilingual Communication</h4>
              <p className={styles.langSub}>Enabling seamless cross-team leadership across diverse cultural and regional hubs.</p>
            </div>
          </div>

          <div className={styles.langGrid}>
            {languages.map((l) => (
              <div key={l.name} className={styles.langItem}>
                <span className={styles.langName}>{l.name}</span>
                <span className={styles.langLevel}>{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
