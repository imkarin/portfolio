import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const Cursor = props => {
    // States
    const { theme, setTheme } = useTheme()
    const cursorRef = useRef(null)
    
    // Classes based on state
    const themeClass = theme === 'light' ? styles.lightTheme : styles.darkTheme
    const hoverLinkClass = props.hoverLink ? styles.hoverLink : ' '
    const selectedCursor = styles.Pika  // This will later be determined by what the cursor is hovering over


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
        <div className ={ styles.Cursor + ' ' + themeClass + ' ' + hoverLinkClass }
             ref = { cursorRef }>
            <div></div>
            <div className={ styles.cursorImg + ' ' + selectedCursor } />
        </div>
    )
}

export default Cursor