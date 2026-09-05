'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState('Engineering Role / Collaboration');

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.grid}>
          {/* Left — info (slides in from left) */}
          <div className={styles.infoCol} data-reveal="left">
            <p className="section-label" data-reveal="left">Connect &amp; Collaborate</p>
            <h2 className={`section-heading ${styles.heading}`}>
              <span className="reveal-word-left" data-reveal="left">Let&apos;s Build Something </span>
              <span className="reveal-word-right" data-reveal="right"><span>Exceptional</span></span>
            </h2>
            <p className={styles.sub} data-reveal="up">
              Available for high-stakes software engineering leadership roles, cloud architecture consulting,
              and private partnership inquiries regarding my upcoming pre-owned venture. Reach out directly below.
            </p>

            <div className={styles.channels}>
              <a href="https://wa.me/917732010001" target="_blank" rel="noopener noreferrer" className={styles.channel} data-reveal="left" data-delay="100">
                <span className={styles.channelIcon}>💬</span>
                <div>
                  <span className={styles.channelLabel}>Instant WhatsApp</span>
                  <span className={styles.channelVal}>+91 7732010001 (Fastest Reply)</span>
                </div>
              </a>

              <a href="mailto:kgurusubhash@gmail.com" className={styles.channel} data-reveal="left" data-delay="150">
                <span className={styles.channelIcon}>✉</span>
                <div>
                  <span className={styles.channelLabel}>Direct Email</span>
                  <span className={styles.channelVal}>kgurusubhash@gmail.com</span>
                </div>
              </a>

              <a href="tel:+917732010001" className={styles.channel} data-reveal="left" data-delay="200">
                <span className={styles.channelIcon}>📞</span>
                <div>
                  <span className={styles.channelLabel}>Direct Call</span>
                  <span className={styles.channelVal}>+91 7732010001</span>
                </div>
              </a>

              <div className={styles.channel} data-reveal="left" data-delay="250">
                <span className={styles.channelIcon}>📍</span>
                <div>
                  <span className={styles.channelLabel}>Current Location</span>
                  <span className={styles.channelVal}>Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            <div className={styles.socialRow} data-reveal="up">
              <a
                href="https://linkedin.com/in/kuppalagurusubhash"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://instagram.com/shubhash"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Right — form (slides in from right) */}
          <div className={styles.formCol} data-reveal="right">
            {sent ? (
              <div className={styles.successBox}>
                <span className={styles.successIcon}>✓</span>
                <h3 className={styles.successTitle}>Message Dispatched</h3>
                <p>Thank you for reaching out. Subhash will respond promptly within 24 hours.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.quickTopics}>
                  <span className={styles.topicsLabel}>Select Discussion Topic:</span>
                  <div className={styles.topicButtons}>
                    {['Engineering Leadership', 'Pre-Owned Venture Intimation', 'Full Stack Architecture', 'General Inquiry'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`${styles.topicBtn} ${subject === t ? styles.topicBtnActive : ''}`}
                        onClick={() => setSubject(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="cf-name">Your Full Name</label>
                    <input id="cf-name" type="text" placeholder="e.g. Alex Henderson" required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="cf-email">Email Address</label>
                    <input id="cf-email" type="email" placeholder="alex@company.com" required />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="cf-subject">Subject</label>
                  <input
                    id="cf-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="cf-message">Message / Scope</label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    placeholder="Provide brief details about the role, project, or venture inquiry..."
                    required
                  />
                </div>

                <button type="submit" className={styles.submit}>
                  Send Direct Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
