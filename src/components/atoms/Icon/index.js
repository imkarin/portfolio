import styles from './style.module.scss'

const Icon = props => {
    const social = (props.social)? styles.Social : ""

    return (
        <img src={props.src} alt={props.alt} className={`${styles.Icon} ${social}`} />
    )
}

export default Icon