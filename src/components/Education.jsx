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
        <p className="section-label">Education</p>
        <h2 className={`section-heading ${styles.heading}`}>
          Academic <span>Foundation</span>
        </h2>

        <div className={styles.grid}>
          {education.map((e, i) => (
            <div key={i} className={`${styles.card} ${e.current ? styles.current : ''}`}>
              <div className={styles.topRow}>
                <span className={styles.year}>{e.year}</span>
                <span className={styles.cgpa}>CGPA {e.cgpa}</span>
              </div>
              <h3 className={styles.degree}>{e.degree}</h3>
              <p className={styles.school}>
                {e.school}{e.location ? `, ${e.location}` : ''}
              </p>
              {e.current && <span className={styles.currentBadge}>Currently Enrolled</span>}
            </div>
          ))}
        </div>

        {/* Honors */}
        <div className={styles.honorsSection}>
          <h3 className={styles.honorsTitle}>Honors &amp; Certifications</h3>
          <div className={styles.honorsList}>
            {honors.map((h, i) => (
              <div key={i} className={styles.honorItem}>
                <span className={styles.honorIcon}>{h.icon}</span>
                <div>
                  <p className={styles.honorTitle}>{h.title}</p>
                  <p className={styles.honorFrom}>{h.from}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
