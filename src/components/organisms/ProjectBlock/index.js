import styles from './style.module.scss'
import Paragraph from '../../atoms/Paragraph'
import TextBlock from '../../molecules/TextBlock'

const ProjectBlock = props => {
    return (
        <div href={props.url} className={styles.ProjectBlock}>
            <Paragraph>{props.tags}</Paragraph>
            <TextBlock titleSize="3" title={props.title} text={props.text} />
        </div>
    )
}

export default ProjectBlock