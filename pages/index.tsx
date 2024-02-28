import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hello, World!</h1>
      </header>
      <div className={styles.content}>
        <nav className={styles.sidebar}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}>Home</li>
            <li className={styles.navigationItem}>About</li>
            <li className={styles.navigationItem}>Services</li>
            <li className={styles.navigationItem}>Contact</li>
          </ul>
        </nav>
        <main className={styles.main}>
          <p className={styles.loremIpsum}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nunc id aliquam tincidunt, nisl mauris fringilla
            magna, ac aliquet nunc mauris nec nunc. Nulla facilisi. Sed
            euismod, nisl ut lacinia tincidunt, nunc nunc ultrices nunc,
            vitae aliquet nunc nunc eget nunc. Sed id nunc nec nunc
            tincidunt lacinia. Nulla facilisi. Sed euismod, nisl ut
            lacinia tincidunt, nunc nunc ultrices nunc, vitae aliquet nunc
            nunc eget nunc. Sed id nunc nec nunc tincidunt lacinia.
          </p>
        </main>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2022 Your Company</p>
      </footer>
    </div>
  );
}
