import styles from './style.module.scss'
import TextBlock from '../../molecules/TextBlock'

const LeftSideText = props => {
    return (
        <div className={styles.LeftSideText}>
            <TextBlock titleSize="1" title={props.title} text={props.text} />
        </div>
    )
}

export default LeftSideText