import styles from './style.module.scss'

const Logo = props => {
    return (
        <p className={styles.Paragraph}>{props.children}</p>
    )
}

export default Logo