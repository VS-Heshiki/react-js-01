import styles from '../css/Header.module.css'
import IgniteLogo from '../public/IgniteLogo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Logo do Ignite" />
        </header>
    )
}
