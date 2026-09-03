import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>KGS<span>.</span></span>
        <p className={styles.copy}>
          © 2026 Kuppala Guru Subhash. Built with Next.js &amp; precision.
        </p>
        <a href="#hero" className={styles.top}>↑ Top</a>
      </div>
    </footer>
  );
}
