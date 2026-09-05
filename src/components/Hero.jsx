'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const builderLetters = ['B', 'U', 'I', 'L', 'D', 'E', 'R'];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, active: false });
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
    setHoveredIdx(null);
  };

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
            {/* Giant BUILDER with Luxury Platinum/Grey Cursor Hover Animation */}
            <div
              ref={textRef}
              className={`${styles.giantText} ${mousePos.active ? styles.giantTextActive : ''}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                '--mouse-x': `${mousePos.x}%`,
                '--mouse-y': `${mousePos.y}%`,
              }}
              aria-label="BUILDER"
            >
              {builderLetters.map((char, i) => {
                const isHovered = hoveredIdx === i;
                const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - i) === 1;

                return (
                  <span
                    key={i}
                    className={`${styles.builderChar} ${isHovered ? styles.charHovered : ''} ${
                      isNeighbor ? styles.charNeighbor : ''
                    }`}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onTouchStart={() => setHoveredIdx(i)}
                    onTouchEnd={() => setTimeout(() => setHoveredIdx(null), 1200)}
                  >
                    {char}
                  </span>
                );
              })}
            </div>

            {/* Subhash Centered Studio Cutout (Foreground Layer) */}
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
