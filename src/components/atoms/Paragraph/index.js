import styles from './style.module.scss'

const Paragraph = props => {
    return (
        <p className={styles.Paragraph}>{props.children}</p>
    )
}

export default Paragraph