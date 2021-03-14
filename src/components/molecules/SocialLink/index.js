import Heading from "../../atoms/Heading"
import Icon from "../../atoms/Icon"
import styles from './style.module.scss'
import Link from 'next/link'

const SocialLink = props => {
    return (
        <div className={styles.SocialLink}>
            <Link href={props.href}>
                <a>
                    <Icon social src={props.imgSrc} alt={props.imgAlt} />
                    {props.children}
                    <Icon social src='./img/linkarrow.png' alt='arrow' />
                </a>
            </Link>
        </div>
    )
}

export default SocialLink