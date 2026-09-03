import Image from 'next/image';
import styles from './About.module.css';

const stats = [
  { value: '40%', label: 'Deployment Velocity Boost' },
  { value: '99.9%', label: 'Infrastructure Reliability' },
  { value: '4+', label: 'Flagship Systems Engineered' },
  { value: '5', label: 'Spoken Languages' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        {/* Credentials Pill Strip — Revealed on Scroll */}
        <div className={styles.topCredentialsWrap}>
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

        <div className={styles.grid}>
          {/* Left — image & stats */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/subhash2.jpeg"
                alt="Kuppala Guru Subhash — Software Lead & Entrepreneur"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className={styles.frameBadge}>
                <span className={styles.badgePulse} /> Team Lead · CropNow
              </div>
            </div>

            {/* Stats strip */}
            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statVal}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Direct Connect Buttons */}
            <div className={styles.socialStrip}>
              <a
                href="https://linkedin.com/in/kuppalagurusubhash"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <span className={styles.linkedinIcon}>in</span>
                <span>LinkedIn</span>
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

              <a
                href="https://wa.me/917732010001"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right — text */}
          <div className={styles.textCol}>
            <div className={styles.statusBadge}>
              <span className={styles.livePulse} /> Available for High-Impact Roles · Bangalore, India
            </div>

            <p className="section-label">Profile &amp; Philosophy</p>
            <h2 className={`section-heading ${styles.heading}`}>
              Engineering Precision Meets <span>Entrepreneurial Vision</span>
            </h2>

            <p className={styles.body}>
              I&apos;m a Full Stack Engineer and Software Team Lead with a passion for designing high-scale distributed systems,
              streamlining cloud pipelines, and building resilient digital platforms. At&nbsp;<strong>CropNow</strong>,
              I spearhead engineering delivery, architectural reviews, and deadline execution as a core CSC member.
            </p>

            <p className={styles.body}>
              Parallel to my software leadership, I am architecting my own <strong>pre-owned enterprise venture</strong>,
              applying engineering rigor and automated workflows to solve real-world marketplace challenges.
              The comprehensive venture release and platform architecture will be <strong>officially intimated to partners soon</strong>.
            </p>

            <p className={styles.body}>
              I am completing my <strong>MCA at REVA University, Bangalore</strong> (7.82 CGPA) following a Bachelor of Technology
              in Computer Science &amp; Engineering (8.23 CGPA) — relentlessly balancing full-time software leadership with continuous academic mastery.
            </p>

            <blockquote className={styles.quote}>
              &ldquo;Between scalable system architecture and entrepreneurial strategy lies the space where I build.
              From architecting high-throughput microservices to scaling real-world ventures, my work revolves around reliability, speed, and real-world value.&rdquo;
            </blockquote>

            <div className={styles.badgeRow}>
              <span className={styles.badge}>MERN Stack</span>
              <span className={styles.badge}>Java &amp; Python</span>
              <span className={styles.badge}>Docker · AWS · Azure</span>
              <span className={styles.badge}>CI/CD Pipelines</span>
              <span className={styles.badge}>Pre-Owned Commerce (Soon)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
