import style from '../assets/css/Button.module.css'

export default function Button({ children, ...props}) {
    return(<button className={style.submitButton} {...props}>{children}</button>)
}