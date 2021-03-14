import styles from './style.module.scss';
import Link from 'next/link';

const Button = props => {
    if (props.children) {
        return (
            <Link href={props.href}>
                <a className={styles.Button}>
                    {props.children}
                </a>
            </Link>
        )
    } else {
        return (null)
    }
}

export default Button