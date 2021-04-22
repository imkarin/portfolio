import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const Cursor = props => {
    const { theme, setTheme } = useTheme()
    const themeClass = theme === 'light' ? styles.lightTheme : styles.darkTheme

    const cursorRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousemove', event => {
            const {pageX, pageY} = event;
            const mouseX = pageX - 5
            const mouseY = pageY - 5
            cursorRef.current.style.top = `${mouseY}px`
            cursorRef.current.style.left = `${mouseX}px`
        })
    }, []);

    return (
        <div className={styles.Cursor + ' ' + themeClass} ref={cursorRef}>
            <div></div>
        </div>
    )
}

export default Cursor