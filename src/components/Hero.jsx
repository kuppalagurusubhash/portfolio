'use client';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.posterWrapper}>
        <div className={styles.heroCard}>
          {/* Subtle Ambient Window Grid Shadow */}
          <div className={styles.windowShadowOverlay} aria-hidden="true" />

          {/* Warm Ambient Gold Spotlight */}
          <div className={styles.ambientGoldGlow} aria-hidden="true" />

          {/* Minimalist Top Bar: Subhash's Name & Title */}
          <div className={styles.topHeader}>
            <h1 className={styles.brandName}>
              KUPPALA GURU <span className={styles.goldName}>SUBHASH</span>
            </h1>
            <p className={styles.brandSubtitle}>
              Software Team Lead &amp; Full Stack Engineer
            </p>
          </div>

          {/* Center Stage: Giant BUILDER Typography + Subhash Cutout */}
          <div className={styles.centerStage}>
            {/* Giant Background Word */}
            <div className={styles.giantText} aria-hidden="true">
              BUILDER
            </div>

            {/* Subhash Centered Studio Cutout */}
            <div className={styles.portraitContainer}>
              <Image
                src="/subhash_cutout.png"
                alt="Kuppala Guru Subhash"
                fill
                priority
                className={styles.portraitImage}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 750px"
              />
            </div>
          </div>

          {/* Minimalist Bottom Bar: Clean Scroll Prompt */}
          <div className={styles.bottomBar}>
            <a href="#about" className={styles.scrollDown}>
              <span>Scroll to Explore</span>
              <span className={styles.arrow}>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
