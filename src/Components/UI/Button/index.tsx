import styles from './Button.module.scss'

type ButtonProps = {
    text: string
}

const Button = (props: ButtonProps) => {
    return <button className={styles.btn}>{props.text}</button>
}

export default Button