import styles from './style.module.scss'

const Logo = props => {
    return (
        <img src={props.src} alt={props.alt} dim={props.dim} className={styles.Logo} />
    )
}

export default Logo