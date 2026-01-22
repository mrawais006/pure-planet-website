
// src/components/layout/Header.tsx
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>PURE PLANET</div>
                <nav className={styles.nav}>
                    {/* TODO: Add navigation links from Figma */}
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
