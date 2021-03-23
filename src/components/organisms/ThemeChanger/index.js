import { useTheme } from 'next-themes'
import styles from './style.module.scss'

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
      theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
  
    return (
      <div className={styles.ThemeChanger}>
        <button onClick={toggleTheme}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    )
  }

export default ThemeChanger