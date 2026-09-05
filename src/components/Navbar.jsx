'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${open ? styles.navActive : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} onClick={() => setOpen(false)}>
          KGS<span className={styles.dot}>.</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>
          Let&rsquo;s Connect
        </a>

        {/* Mobile hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${open ? styles.mobileMenuVisible : ''}`} aria-hidden={!open}>
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileBadge}>
            <span className={styles.mobileBadgeDot} />
            <span>Kuppala Guru Subhash · Portfolio</span>
          </div>

          <div className={styles.mobileLinksList}>
            {links.map((l, index) => (
              <a
                key={l.href}
                href={l.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                <span className={styles.mobileLinkNum}>0{index + 1}</span>
                <span className={styles.mobileLinkLabel}>{l.label}</span>
                <span className={styles.mobileLinkArrow}>→</span>
              </a>
            ))}
          </div>

          <div className={styles.mobileFooterArea}>
            <a href="#contact" className={styles.mobileCta} onClick={() => setOpen(false)}>
              Let&rsquo;s Connect &amp; Collaborate
            </a>

            <div className={styles.mobileQuickContacts}>
              <a href="https://wa.me/917732010001" target="_blank" rel="noopener noreferrer" className={styles.mobileQuickBtn}>
                <span>💬</span> WhatsApp
              </a>
              <a href="mailto:kgurusubhash@gmail.com" className={styles.mobileQuickBtn}>
                <span>✉</span> Email
              </a>
              <a href="tel:+917732010001" className={styles.mobileQuickBtn}>
                <span>📞</span> Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
