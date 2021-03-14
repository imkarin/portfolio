import styles from './style.module.scss'
import SocialLink from '../../molecules/SocialLink'

const SocialLinkList = props => {
    return (
        <div className={styles.SocialLinkList}>
            {props.socials.map((social) =>
                <SocialLink key={social.imgAlt} href={social.href} imgSrc={social.imgSrc} imgAlt={social.imgAlt}>
                    {social.text}
                </SocialLink>  
            )}
        </div>
    )
}

export default SocialLinkList