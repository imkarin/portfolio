import { useTheme } from 'next-themes'
import Link from 'next/link'
import styles from './style.module.scss'
import Paragraph from '../../atoms/Paragraph'
import TextBlock from '../../molecules/TextBlock'

const ProjectBlock = props => {
    const { theme, setTheme } = useTheme()
    const themeClass = theme === 'light' ? styles.lightTheme : styles.darkTheme

    // topics array to string separate by commas
    const topicString = props.tags.join(", ")

    return (
        <a href={props.url} target='_blank'>
            <div className={styles.ProjectBlock + ' ' + themeClass}>
                <Paragraph>{topicString}</Paragraph>
                <TextBlock titleSize="3" title={props.title} text={props.text} />
            </div>
        </a>
    )
}

export default ProjectBlock