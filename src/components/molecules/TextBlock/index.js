import Heading from "../../atoms/Heading"
import Paragraph from "../../atoms/Paragraph"
import styles from './style.module.scss'

const TextBlock = props => {
    return (
        <article className={styles.TextBlock}>
            <Heading level={props.titleSize}>
                {props.title}
            </Heading>

            <Paragraph>
                {props.text}
            </Paragraph>
        </article>
    )
}

export default TextBlock