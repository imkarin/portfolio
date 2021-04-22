import { useTheme } from 'next-themes'
import Icon from "../../atoms/Icon"
import styles from './style.module.scss'
import Link from 'next/link'

const SocialLink = props => {
    const { theme, setTheme } = useTheme()

    return (
        <div
        onMouseEnter={props.hoverLinkHandler} 
        onMouseLeave={props.hoverLinkHandler}
        className={styles.SocialLink}>
            <Link href={props.href}>
                <a target='_blank'>
                    <Icon social src={props.imgSrc} alt={props.imgAlt} />
                    {props.children}
                    <Icon social src={theme === 'light' ? './img/linkarrow.png' : './img/linkarrow-white.png'}
                                 alt='arrow' />
                </a>
            </Link>
        </div>
    )
}

export default SocialLink