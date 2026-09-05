'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Experience.module.css';

const cropNowAwards = [
  {
    id: 'cropnow-certificate',
    title: 'Certificate of Achievement & Star Trophy',
    badge: 'Official Leadership Award',
    issuer: 'Conferred by CropNow Leadership',
    image: '/awards/cropnow-certificate.jpeg',
    desc: 'Awarded to Kuppala Guru Subhash in recognition of valuable contributions to CropNow and commitment towards agritech innovation.',
    citation: '“Ideas today. Greener tomorrow. Innovation for a Healthier Planet.”',
    year: 'Official Conclave Ceremony',
  },
  {
    id: 'cropnow-plaque',
    title: 'Rapid Execution Achievement Plaque',
    badge: 'National Tricolor Honor',
    issuer: 'CropNow Engineering & Operations',
    image: '/awards/cropnow-plaque.jpeg',
    desc: 'Honored with the official CropNow Congratulation Achievement Plaque and ceremonial tricolor shawl for decisive sprint execution and high-throughput microservices turnaround.',
    citation: '“Technology for a Greener Tomorrow · People Ideas Impact”',
    year: 'Corporate Recognition Ceremony',
  },
  {
    id: 'cropnow-working',
    title: 'Software Team Lead in Action',
    badge: 'Core CSC Member',
    issuer: 'CropNow Headquarters · Bangalore',
    image: '/awards/cropnow-working.jpeg',
    desc: 'Spearheading engineering velocity, sprint execution, cloud deployment pipelines, and microservices architecture directly from CropNow agritech HQ.',
    citation: '“Smarter Farms · Healthier Tomorrows · Engineering Scalable Impact”',
    year: 'Active Leadership Tenure',
  },
];

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
  const [activeAward, setActiveAward] = useState(null);

  useEffect(() => {
    if (activeAward) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveAward(null);
        if (e.key === 'ArrowRight') {
          setActiveAward((prev) => {
            const idx = cropNowAwards.findIndex((a) => a.id === prev.id);
            return cropNowAwards[(idx + 1) % cropNowAwards.length];
          });
        }
        if (e.key === 'ArrowLeft') {
          setActiveAward((prev) => {
            const idx = cropNowAwards.findIndex((a) => a.id === prev.id);
            return cropNowAwards[(idx - 1 + cropNowAwards.length) % cropNowAwards.length];
          });
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeAward]);

  return (
    <section className={`section ${styles.exp}`} id="experience">
      <div className="container">
        <p className="section-label" data-reveal="left">Leadership &amp; Career</p>
        <h2 className={`section-heading ${styles.heading}`}>
          <span className="reveal-word-left" data-reveal="left">Professional </span>
          <span className="reveal-word-right" data-reveal="right"><span>Experience</span></span>
        </h2>
        <p className="section-sub" data-reveal="up">
          A track record of high-stakes engineering leadership at CropNow, paired with proprietary entrepreneurial ventures.
        </p>

        {/* ── 1. The Clean Executive Career Timeline ── */}
        <div className={styles.timeline}>
          {experiences.map((ex, i) => (
            <div
              key={i}
              className={`${styles.card} ${ex.active ? styles.activeCard : ''} ${ex.soonBadge ? styles.soonCard : ''}`}
              data-reveal={i % 2 === 0 ? 'left' : 'right'}
            >
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
                    <a href="#cropnow-awards" className={styles.awardBadge} title="Click to view ceremony photos below">
                      <span className={styles.awardIcon}>🏆</span>
                      <div className={styles.awardBadgeText}>
                        <strong>{ex.award}</strong>
                        <span className={styles.awardDesc}>{ex.awardSub}</span>
                      </div>
                      <span className={styles.awardJumpArrow}>📸 View Photos ↓</span>
                    </a>
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

        {/* ── 2. Dedicated Honors & Leadership Gallery (Separate from Timeline Cards) ── */}
        <div className={styles.accoladesSection} id="cropnow-awards" data-reveal="up">
          <div className={styles.accoladesHeader}>
            <div className={styles.accoladesHeaderLeft}>
              <span className={styles.trophyIconLarge}>🏆</span>
              <div>
                <span className={styles.accoladesEyebrow}>VERIFIED LEADERSHIP ACCOLADES</span>
                <h3 className={styles.accoladesTitle}>Official Honors &amp; Award Ceremony Photos</h3>
                <p className={styles.accoladesSub}>
                  Verified recognition and leadership moments conferred at CropNow
                </p>
              </div>
            </div>
            <div className={styles.verifiedCropBadge}>
              <span className={styles.badgePulse} /> CropNow Verified Accolade
            </div>
          </div>

          <div className={styles.accoladesGrid}>
            {cropNowAwards.map((award) => (
              <div
                key={award.id}
                className={styles.accoladeCard}
                onClick={() => setActiveAward(award)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveAward(award)}
              >
                <div className={styles.accoladeImageFrame}>
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className={styles.accoladeImg}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  />
                  <div className={styles.accoladeOverlay}>
                    <span className={styles.zoomPrompt}>
                      <span>🔍</span> Expand Ceremony Photo
                    </span>
                  </div>
                  <span className={styles.accoladePill}>{award.badge}</span>
                </div>

                <div className={styles.accoladeInfo}>
                  <div className={styles.accoladeMetaRow}>
                    <span className={styles.accoladeIssuer}>{award.issuer}</span>
                    <span className={styles.accoladeYear}>{award.year}</span>
                  </div>
                  <h4 className={styles.accoladeCardTitle}>{award.title}</h4>
                  <blockquote className={styles.accoladeCitation}>{award.citation}</blockquote>
                  <p className={styles.accoladeDesc}>{award.desc}</p>
                  <div className={styles.accoladeFooter}>
                    <span className={styles.inspectPrompt}>Tap to view full resolution ↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeAward && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveAward(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeAward.title}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setActiveAward(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Navigation Buttons */}
            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={() => {
                const idx = cropNowAwards.findIndex((a) => a.id === activeAward.id);
                setActiveAward(cropNowAwards[(idx - 1 + cropNowAwards.length) % cropNowAwards.length]);
              }}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={() => {
                const idx = cropNowAwards.findIndex((a) => a.id === activeAward.id);
                setActiveAward(cropNowAwards[(idx + 1) % cropNowAwards.length]);
              }}
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Main Image */}
            <div className={styles.modalImageWrap}>
              <Image
                src={activeAward.image}
                alt={activeAward.title}
                fill
                priority
                className={styles.modalImage}
                sizes="95vw"
              />
            </div>

            {/* Caption & Metadata */}
            <div className={styles.modalCaption}>
              <div className={styles.modalHeaderRow}>
                <div>
                  <span className={styles.modalBadge}>{activeAward.badge}</span>
                  <h3 className={styles.modalTitle}>{activeAward.title}</h3>
                  <p className={styles.modalIssuer}>{activeAward.issuer} · {activeAward.year}</p>
                </div>
              </div>
              <p className={styles.modalDesc}>{activeAward.desc}</p>
              <blockquote className={styles.modalQuote}>{activeAward.citation}</blockquote>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
