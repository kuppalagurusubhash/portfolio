import Image from 'next/image';
import styles from './About.module.css';

const stats = [
  { value: '40%', label: 'Deployment Velocity Boost' },
  { value: '99.9%', label: 'Infrastructure Reliability' },
  { value: '4+', label: 'Flagship Systems Engineered' },
  { value: '5', label: 'Spoken Languages' },
];

const pillars = [
  {
    tag: 'BUILD',
    title: 'Scalable Distributed Systems',
    role: 'Software Team Lead @ CropNow',
    desc: 'Architecting resilient backend flows, high-throughput microservices, and containerized deployment pipelines as a Core CSC Member (~40% velocity boost).',
  },
  {
    tag: 'SCALE',
    title: 'Proprietary Enterprise Venture',
    role: 'Founder & Managing Director',
    desc: 'Engineering an automated inventory management & trust-first commerce platform for verified high-value pre-owned commercial assets (Stealth Phase).',
  },
  {
    tag: 'IMPACT',
    title: 'Academic & Engineering Rigor',
    role: 'MCA & B.Tech @ REVA University',
    desc: 'Relentlessly balancing full-time software leadership with continuous academic mastery — MCA (7.82 CGPA) following Bachelor of Technology in CSE (8.23 CGPA).',
  },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        {/* Credentials Pill Strip */}
        <div className={styles.topCredentialsWrap} data-reveal="up">
          <div className={styles.credentialsPill}>
            <span className={styles.verifiedDot} />
            <span>SOFTWARE LEAD @ CROPNOW</span>
            <span className={styles.pillDot}>•</span>
            <span>FULL STACK &amp; DEVOPS</span>
            <span className={styles.pillDot}>•</span>
            <span className={styles.goldPillText}>PRE OWNED VENTURE (DETAILS INTIMATED SOON)</span>
            <span className={styles.pillDot}>•</span>
            <span>REVA UNIVERSITY MCA</span>
          </div>
        </div>

        {/* ── Seamless Editorial Monograph Spread (No Boxed Card) ── */}
        <div className={styles.editorialSpread} data-reveal="up">
          {/* Main 3-Column Editorial Panorama */}
          <div className={styles.spreadMainGrid}>
            {/* Left Column — The BUILD Typography & Mantras */}
            <div className={styles.leftCol} data-reveal="left">
              <span className={styles.roleLine}>— FULL STACK ENGINEER &amp; TEAM LEAD</span>

              {/* Iconic BUILD Typography: B & U are hollow outline, I, L, D are radiant gold */}
              <div className={styles.buildWord} aria-label="BUILD">
                <span className={styles.outlineChar}>B</span>
                <span className={styles.outlineChar}>U</span>
                <span className={styles.goldChar}>I</span>
                <span className={styles.goldChar}>L</span>
                <span className={styles.goldChar}>D</span>
              </div>

              <div className={styles.techBusinessMotto}>
                TECHNOLOGY &nbsp;•&nbsp; BUSINESS &nbsp;•&nbsp; A BETTER TOMORROW
              </div>

              {/* 3 Core Mantras with Vertical Golden Bar */}
              <div className={styles.mantraContainer}>
                <div className={styles.mantraBar} />
                <div className={styles.mantraList}>
                  <p className={styles.mantraItem}>Engineering solutions.</p>
                  <p className={styles.mantraItem}>Scaling ideas.</p>
                  <p className={styles.mantraItem}>Creating meaningful impact.</p>
                </div>
              </div>

              {/* Location Badge */}
              <div className={styles.locationWrap}>
                <span className={styles.locationPill}>
                  <span>📍</span> BANGALORE, INDIA
                </span>
                <span className={styles.liveAvailable}>
                  <span className={styles.pulseDot} /> Available for Leadership
                </span>
              </div>
            </div>

            {/* Center Column — Subhash Standing in Sharp Black Suit */}
            <div className={styles.centerCol} data-reveal="up">
              <div className={styles.portraitAura} aria-hidden="true" />
              <div className={styles.portraitWrapper}>
                <Image
                  src="/subhash-suit-pristine.png"
                  alt="Kuppala Guru Subhash"
                  fill
                  priority
                  className={styles.portraitImage}
                  sizes="(max-width: 768px) 90vw, 480px"
                />
              </div>
            </div>

            {/* Right Column — Architectural Editorial Headline & Motto */}
            <div className={styles.rightCol} data-reveal="right">
              <div className={styles.architecturalHeadline}>
                <span>Engineering</span>
                <span>Precision</span>
                <span>Meets</span>
                <span>Entrepreneur</span>
                <span className={styles.goldVision}>Vision</span>
              </div>

              {/* Vertical Architectural Ribbon */}
              <div className={styles.verticalRibbonWrap}>
                <span className={styles.ribbonDivider}>|</span>
                <div className={styles.verticalWords}>
                  <span>PRODUCTS</span>
                  <span>SYSTEMS</span>
                  <span>PEOPLE</span>
                  <span>IMPACT</span>
                </div>
              </div>

              {/* Bottom Right Motto */}
              <div className={styles.bottomMotto}>
                <span>DISCIPLINE</span>
                <span>DRIVES</span>
                <span>FREEDOM</span>
                <span className={styles.mottoDash}>—</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Executive Information & Career Narrative Section ── */}
        <div className={styles.narrativeSection} data-reveal="up">
          <div className={styles.narrativeHeader}>
            <p className="section-label">Detailed Profile &amp; Background</p>
            <h3 className={styles.narrativeTitle}>Leadership &amp; Technical Foundation</h3>
            <p className={styles.narrativeIntro}>
              Bridging high-scale distributed backend engineering with decisive entrepreneurial strategy.
            </p>
          </div>

          {/* 3 Pillar Information Cards */}
          <div className={styles.pillarsGrid}>
            {pillars.map((p, idx) => (
              <div key={p.tag} className={styles.pillarCard} data-reveal="up" data-delay={idx * 100}>
                <div className={styles.pillarHeader}>
                  <span className={styles.pillarTag}>{p.tag}</span>
                  <span className={styles.pillarRole}>{p.role}</span>
                </div>
                <h4 className={styles.pillarTitle}>{p.title}</h4>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Key Impact Stats Bar */}
          <div className={styles.statsGrid} data-reveal="up" data-delay="150">
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Narrative Paragraphs */}
          <div className={styles.narrativeBody} data-reveal="up" data-delay="200">
            <p>
              I am a <strong>Software Team Lead</strong> and <strong>Full Stack Engineer</strong> with proven experience
              architecting high-throughput microservices, streamlining cloud CI/CD pipelines, and enforcing agile governance.
              At <strong>CropNow</strong>, I spearhead core backend velocity, containerized deployment stability, and deadline execution as a Core CSC member.
            </p>
            <p>
              Concurrently, I am the founder of a <strong>stealth-phase pre-owned commercial enterprise venture</strong>,
              applying automated valuation workflows and transaction safety protocols to modernize secondary asset markets.
            </p>
            <p>
              I am completing my <strong>Master of Computer Applications (MCA) at REVA University, Bangalore</strong> (7.82 CGPA)
              following a Bachelor of Technology in Computer Science &amp; Engineering (8.23 CGPA) — consistently demonstrating the discipline to lead production engineering teams while excelling academically.
            </p>
          </div>

          {/* Technical Governance Tags */}
          <div className={styles.badgeRow} data-reveal="up" data-delay="250">
            <span className={styles.badge}>MERN Stack</span>
            <span className={styles.badge}>Java &amp; Python</span>
            <span className={styles.badge}>Docker · AWS · Azure</span>
            <span className={styles.badge}>CI/CD Pipelines</span>
            <span className={styles.badge}>Microservices Architecture</span>
            <span className={styles.badge}>Pre-Owned Commerce (Soon)</span>
          </div>

          {/* Direct Social & Connect Links */}
          <div className={styles.socialStrip} data-reveal="up" data-delay="300">
            <a
              href="https://linkedin.com/in/kuppalagurusubhash"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <span className={styles.linkedinIcon}>in</span>
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://wa.me/917732010001"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <span>💬</span>
              <span>WhatsApp Direct</span>
            </a>
            <a
              href="https://instagram.com/shubhash"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <span>📷</span>
              <span>Instagram</span>
            </a>
            <a href="#contact" className={styles.contactBtn}>
              <span>Get in Touch →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
