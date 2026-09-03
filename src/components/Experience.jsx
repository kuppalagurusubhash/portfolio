import styles from './Experience.module.css';

const experiences = [
  {
    period: 'Dec 2025 – Present',
    company: 'CropNow',
    role: 'Software Team Lead',
    type: 'Full-Time Leadership',
    active: true,
    award: 'Rapid Execution & Commitment Award',
    awardSub: 'Conferred by CropNow leadership for exceptional delivery turnaround',
    bullets: [
      'Architected resilient backend flows, high-throughput microservices, and end-to-end delivery pipeline management.',
      'Key Core CSC Member — managed project velocity, sprint roadmaps, team task assignment, and deadline enforcement.',
      'Optimized containerized deployments and data flow monitoring, boosting system deployment efficiency by ~40%.',
      'Honored with the "Rapid Execution and Commitment Award" for decisive engineering execution under tight timelines.',
    ],
    tags: ['Microservices Architecture', 'Team Leadership', 'Backend Pipelines', 'DevOps & Cloud', 'Agile Governance'],
  },
  {
    period: 'Launching Soon',
    company: 'Pre-Owned Enterprise Venture',
    role: 'Founder & Managing Director',
    type: 'Proprietary Venture',
    active: false,
    soonBadge: 'CONFIDENTIAL • DETAILS INTIMATED SOON',
    bullets: [
      'Architecting a modern, trust-first digital commerce platform for verified high-value pre-owned assets.',
      'Engineering automated inventory management, verification workflows, and buyer-seller transaction safety protocols.',
      'Combining software engineering scalability with real-world market economics and digital operations.',
      'Brand identity, platform release, and commercial roll-out will be officially intimated to partners and clients soon.',
    ],
    tags: ['Founder', 'Market Strategy', 'FinTech & Commerce', 'Platform Architecture', 'Stealth Phase'],
    ctaText: 'Get Intimated on Launch',
    ctaLink: '#contact',
  },
];

export default function Experience() {
  return (
    <section className={`section ${styles.exp}`} id="experience">
      <div className="container">
        <p className="section-label">Leadership &amp; Career</p>
        <h2 className={`section-heading ${styles.heading}`}>
          Professional <span>Experience</span>
        </h2>
        <p className="section-sub">
          A track record of high-stakes engineering leadership at CropNow, paired with proprietary entrepreneurial ventures.
        </p>

        <div className={styles.timeline}>
          {experiences.map((ex, i) => (
            <div key={i} className={`${styles.card} ${ex.active ? styles.activeCard : ''} ${ex.soonBadge ? styles.soonCard : ''}`}>
              <div className={styles.cardLeft}>
                <span className={styles.period}>{ex.period}</span>
                {ex.active && <span className={styles.liveBadge}>Active Role</span>}
                {ex.soonBadge && <span className={styles.soonPill}>{ex.soonBadge}</span>}
              </div>

              <div className={styles.connector}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.cardRight}>
                <div className={styles.roleRow}>
                  <div>
                    <h3 className={styles.role}>{ex.role}</h3>
                    <p className={styles.company}>
                      <strong>{ex.company}</strong> · {ex.type}
                    </p>
                  </div>
                  {ex.award && (
                    <div className={styles.awardBadge}>
                      <span className={styles.awardIcon}>🏆</span>
                      <div>
                        <strong>{ex.award}</strong>
                        <span className={styles.awardDesc}>{ex.awardSub}</span>
                      </div>
                    </div>
                  )}
                </div>

                <ul className={styles.bullets}>
                  {ex.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {ex.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                {ex.ctaText && (
                  <div className={styles.cardFooter}>
                    <a href={ex.ctaLink} className={styles.intimateBtn}>
                      <span>{ex.ctaText}</span>
                      <span>→</span>
                    </a>
                    <span className={styles.intimateNote}>Private venture release details will be intimated soon.</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
