import classNames from 'classnames'
import styles from './Button.module.scss'

type ButtonProps = {
    text: string
    className?: string
}

const Button = (props: ButtonProps) => {
    return <button className={classNames(styles.btn, props.className)}>{props.text}</button>
}

export default Button