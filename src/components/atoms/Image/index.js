import styles from'./style.module.scss'

const Image = props => {
    return (
        <img src={props.src} alt={props.alt} className={styles.Image} />
    )
}

export default Image