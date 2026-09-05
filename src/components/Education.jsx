import styles from './Education.module.css';

const education = [
  {
    year: '2024 – 2026',
    degree: 'Master of Computer Applications (MCA)',
    school: 'REVA University',
    location: 'Bangalore',
    cgpa: '7.82',
    current: true,
  },
  {
    year: '2020 – 2024',
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'REVA University',
    location: 'Bangalore',
    cgpa: '8.23',
  },
  {
    year: '2018 – 2020',
    degree: 'Intermediate — MPC',
    school: 'Sri Chaithanya IAS Academy',
    location: '',
    cgpa: '8.86',
  },
  {
    year: 'Class X',
    degree: 'Secondary Education',
    school: 'Captain K K Swamy School',
    location: '',
    cgpa: '9.22',
  },
];

const honors = [
  {
    icon: '🏆',
    title: 'Rapid Execution & Commitment Award',
    from: 'CropNow — for exceptional engineering delivery speed',
    link: '#cropnow-awards',
    linkText: 'View Ceremony Photos ↗',
  },
  {
    icon: '☁️',
    title: 'Code to Cloud Certification',
    from: 'MEVI Technologies — cloud deployment & DevOps',
  },
  {
    icon: '🏸',
    title: 'Sports & Cultural Excellence',
    from: 'Badminton (CSE School Level) · Cultural Dance Certificate',
  },
];

export default function Education() {
  return (
    <section className={`section ${styles.edu}`} id="education">
      <div className="container">
        <p className="section-label" data-reveal="left">Education &amp; Background</p>
        <h2 className={`section-heading ${styles.heading}`}>
          <span className="reveal-word-left" data-reveal="left">Academic </span>
          <span className="reveal-word-right" data-reveal="right"><span>Foundation</span></span>
        </h2>
        <p className="section-sub" data-reveal="up">
          Formal engineering training and computer science education, paired with university leadership and certified cloud competencies.
        </p>

        <div className={styles.grid}>
          {education.map((ed, i) => (
            <div
              key={i}
              className={`${styles.card} ${ed.current ? styles.currentCard : ''}`}
              data-reveal={i % 2 === 0 ? 'left' : 'right'}
            >
              <span className={styles.year}>{ed.year}</span>
              <h3 className={styles.degree}>{ed.degree}</h3>
              <p className={styles.school}>
                {ed.school}{ed.location ? ` · ${ed.location}` : ''}
              </p>
              <div className={styles.meta}>
                <span className={styles.cgpa}>CGPA: <strong>{ed.cgpa}</strong></span>
              </div>
              {ed.current && (
                <span className={styles.currentBadge}>Currently Pursuing</span>
              )}
            </div>
          ))}
        </div>

        {/* Honors */}
        <div className={styles.honorsSection} data-reveal="up">
          <h3 className={styles.honorsTitle}>Honors &amp; Certifications</h3>
          <div className={styles.honorsList}>
            {honors.map((h, i) => (
              <div key={i} className={styles.honorItem} data-reveal="up" data-delay={i * 100}>
                <span className={styles.honorIcon}>{h.icon}</span>
                <div className={styles.honorContent}>
                  <p className={styles.honorTitle}>{h.title}</p>
                  <p className={styles.honorFrom}>{h.from}</p>
                </div>
                {h.link && (
                  <a href={h.link} className={styles.honorLink}>
                    <span>{h.linkText}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
