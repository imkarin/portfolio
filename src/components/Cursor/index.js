import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const Cursor = props => {
    // States
    const { theme, setTheme } = useTheme()
    const cursorRef = useRef(null)

    // Classes based on state
    const cursorImages = {
        github: `${styles.Socials} ${styles.GitHub}`,
        linkedin: `${styles.Socials} ${styles.LinkedIn}` 
    }

    const themeClass = theme === 'light' ? styles.lightTheme : styles.darkTheme
    const hoverLinkClass = props.hoverState.hovering ? styles.hoverLink : ' '

    // Check if/which social link was hovered
    let selectedCursor = ''
    const hoverItemSocial = props.hoverState.hoverItem ? props.hoverState.hoverItem.childNodes[0].href : ''
    for (const key in cursorImages) {
        if (hoverItemSocial.includes(key)) {
            selectedCursor = cursorImages[key]
        }
    }


    useEffect(() => {
        // Move custom cursor to where the mouse is
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