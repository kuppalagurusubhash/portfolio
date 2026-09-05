import styles from './Projects.module.css';

const projects = [
  {
    num: '01',
    title: 'Mesh Drone Network for Disaster Management',
    desc: 'Decentralized autonomous drone communication network for disaster zones. Enables real-time SOS relay and location tracking without cellular infrastructure using low-latency P2P mesh protocols.',
    metric: 'Ultra low-latency P2P',
    tags: ['JavaScript', 'ExpressJS', 'Mesh Networking', 'P2P', 'IoT'],
    icon: '⬡',
  },
  {
    num: '02',
    title: 'Automated Data Flow System with API Integration',
    desc: 'Multi-repository data synchronization platform using FastAPI in Python. Eliminates inter-system latency between distributed frontend and backend services, delivering real-time updates automatically.',
    metric: 'Zero-touch pipeline sync',
    tags: ['Python', 'FastAPI', 'REST APIs', 'Microservices', 'Automation'],
    icon: '⟳',
  },
  {
    num: '03',
    title: 'Two-Factor Worm & Threat Detection System',
    desc: 'Dual-method cybersecurity engine combining signature pattern matching and ML anomaly detection to intercept malicious network payloads before propagation — real-time packet-level analysis.',
    metric: 'ML + Signature dual-analysis',
    tags: ['Python', 'Machine Learning', 'Packet Analysis', 'Network Security'],
    icon: '⬡',
  },
  {
    num: '04',
    title: 'Cloud-Native CI/CD Automated Web Platform',
    desc: 'Full MERN stack application integrating Docker, Jenkins, and Azure for fully automated build-test-deploy cycles. Achieved 40% improvement in deployment frequency and 99.9% pipeline uptime.',
    metric: '40% faster deployments',
    tags: ['MERN', 'Docker', 'Jenkins', 'Azure', 'CI/CD'],
    icon: '↑',
  },
];

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <p className="section-label" data-reveal="left">Projects &amp; Flagship Systems</p>
        <h2 className={`section-heading ${styles.heading}`}>
          <span className="reveal-word-left" data-reveal="left">Featured </span>
          <span className="reveal-word-right" data-reveal="right"><span>Builds</span></span>
        </h2>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div
              key={p.num}
              className={styles.card}
              data-reveal={i % 2 === 0 ? 'left' : 'right'}
              data-delay={i * 80}
            >
              <span className={styles.num}>{p.num}</span>

              <div className={styles.iconCircle}>{p.icon}</div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.metric}>{p.metric}</div>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
