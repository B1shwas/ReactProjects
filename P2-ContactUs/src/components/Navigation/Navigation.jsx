import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className={styles.logo}>
            <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation