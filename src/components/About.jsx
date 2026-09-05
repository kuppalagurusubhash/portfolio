'use client';
import { useState, useEffect } from 'react';
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
    title: 'Scalable Systems',
    desc: 'High-throughput microservices, cloud CI/CD, and resilient agritech platforms at CropNow.',
  },
  {
    tag: 'SCALE',
    title: 'Proprietary Ventures',
    desc: 'Automated valuation workflows & transaction security for high-value pre-owned assets.',
  },
  {
    tag: 'IMPACT',
    title: 'Discipline & Freedom',
    desc: 'Engineering precision aligned with market economics to drive tangible real-world results.',
  },
];

export default function About() {
  const [viewMode, setViewMode] = useState('editorial'); // 'editorial' | 'portrait'
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen]);

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        {/* Credentials Pill Strip — Revealed on Scroll */}
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

        <div className={styles.grid}>
          {/* Left — Executive Editorial Poster Frame */}
          <div className={styles.imageCol} data-reveal="left">
            <div className={styles.posterContainer}>
              {/* Outer Ambient Glow */}
              <div className={styles.posterBackdropGlow} aria-hidden="true" />

              {/* View Mode Switcher Header */}
              <div className={styles.viewSwitcher}>
                <button
                  className={`${styles.switchBtn} ${viewMode === 'editorial' ? styles.switchBtnActive : ''}`}
                  onClick={() => setViewMode('editorial')}
                  type="button"
                >
                  <span>✦ Editorial Poster</span>
                </button>
                <button
                  className={`${styles.switchBtn} ${viewMode === 'portrait' ? styles.switchBtnActive : ''}`}
                  onClick={() => setViewMode('portrait')}
                  type="button"
                >
                  <span>👔 Studio Portrait</span>
                </button>
              </div>

              {/* Editorial Frame Card */}
              <div
                className={styles.imageFrame}
                onClick={() => setIsModalOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
                title="Click to view full resolution poster"
              >
                <Image
                  src={viewMode === 'editorial' ? '/subhash-editorial.jpeg' : '/subhash-suit.jpeg'}
                  alt="Kuppala Guru Subhash — Executive Editorial"
                  fill
                  priority
                  className={styles.posterImage}
                  sizes="(max-width: 768px) 100vw, 48vw"
                />

                {/* Subtle Glass & Gold Corner Accents */}
                <div className={styles.frameCornerTopLeft} />
                <div className={styles.frameCornerTopRight} />
                <div className={styles.frameCornerBottomLeft} />
                <div className={styles.frameCornerBottomRight} />

                {/* Badges on Frame */}
                <div className={styles.frameBadge}>
                  <span className={styles.badgePulse} /> Team Lead · CropNow
                </div>

                <div className={styles.locationBadge}>
                  <span>📍</span> Bangalore, India
                </div>

                {/* Hover Expand Prompt */}
                <div className={styles.imageOverlay}>
                  <span className={styles.expandPrompt}>
                    <span>🔍</span> Tap to Expand Full Poster
                  </span>
                </div>
              </div>

              {/* Direct Connect Buttons */}
              <div className={styles.socialStrip} data-reveal="up">
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
          </div>

          {/* Right — Editorial Philosophy & Monograph */}
          <div className={styles.textCol}>
            <div className={styles.statusBadge} data-reveal="right">
              <span className={styles.livePulse} /> Available for High-Impact Leadership · Bangalore, India
            </div>

            <p className="section-label" data-reveal="left">Executive Editorial &amp; Monograph</p>
            <h2 className={`section-heading ${styles.heading}`}>
              <span className="reveal-word-left" data-reveal="left">Engineering Precision Meets </span>
              <span className="reveal-word-right" data-reveal="right"><span>Entrepreneurial Vision</span></span>
            </h2>

            {/* Architectural Pillars Strip (from pro.jpeg) */}
            <div className={styles.pillarsGrid} data-reveal="up">
              {pillars.map((p) => (
                <div key={p.tag} className={styles.pillarCard}>
                  <div className={styles.pillarTagRow}>
                    <span className={styles.pillarTag}>{p.tag}</span>
                    <span className={styles.pillarDot}>•</span>
                  </div>
                  <h4 className={styles.pillarTitle}>{p.title}</h4>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              ))}
            </div>

            <p className={styles.body} data-reveal="right">
              I&apos;m a Full Stack Engineer and Software Team Lead with a passion for designing high-scale distributed systems,
              streamlining cloud pipelines, and building resilient digital platforms. At&nbsp;<strong>CropNow</strong>,
              I spearhead engineering delivery, architectural reviews, and sprint execution as a core CSC member.
            </p>

            <p className={styles.body} data-reveal="right" data-delay="100">
              Parallel to my software leadership, I am architecting my own <strong>pre-owned enterprise venture</strong>,
              applying engineering rigor and automated workflows to solve real-world marketplace challenges.
              The comprehensive venture release and platform architecture will be <strong>officially intimated to partners soon</strong>.
            </p>

            <p className={styles.body} data-reveal="right" data-delay="150">
              I am completing my <strong>MCA at REVA University, Bangalore</strong> (7.82 CGPA) following a Bachelor of Technology
              in Computer Science &amp; Engineering (8.23 CGPA) — relentlessly balancing full-time software leadership with continuous academic mastery.
            </p>

            <blockquote className={styles.quote} data-reveal="left" data-delay="200">
              &ldquo;Discipline drives freedom. Between scalable system architecture and entrepreneurial strategy lies the space where I build — turning ideas into measurable impact.&rdquo;
            </blockquote>

            {/* Stats Strip */}
            <div className={styles.statsGrid} data-reveal="up" data-delay="220">
              {stats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statVal}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.badgeRow} data-reveal="up" data-delay="250">
              <span className={styles.badge}>MERN Stack</span>
              <span className={styles.badge}>Java &amp; Python</span>
              <span className={styles.badge}>Docker · AWS · Azure</span>
              <span className={styles.badge}>CI/CD Pipelines</span>
              <span className={styles.badge}>Pre-Owned Commerce (Soon)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Poster */}
      {isModalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Executive Editorial Poster"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalImageWrap}>
              <Image
                src={viewMode === 'editorial' ? '/subhash-editorial.jpeg' : '/subhash-suit.jpeg'}
                alt="Kuppala Guru Subhash — Full Poster"
                fill
                priority
                className={styles.modalImage}
                sizes="95vw"
              />
            </div>

            <div className={styles.modalFooter}>
              <div className={styles.modalFooterText}>
                <span className={styles.modalSub}>KGS EXECUTIVE EDITORIAL</span>
                <h3 className={styles.modalHeading}>Engineering Precision Meets Entrepreneurial Vision</h3>
                <p className={styles.modalMotto}>“Discipline Drives Freedom · Turn Ideas into Impact”</p>
              </div>
              <div className={styles.modalSwitchWrap}>
                <button
                  className={`${styles.switchBtn} ${viewMode === 'editorial' ? styles.switchBtnActive : ''}`}
                  onClick={() => setViewMode('editorial')}
                  type="button"
                >
                  Editorial Poster
                </button>
                <button
                  className={`${styles.switchBtn} ${viewMode === 'portrait' ? styles.switchBtnActive : ''}`}
                  onClick={() => setViewMode('portrait')}
                  type="button"
                >
                  Studio Portrait
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
