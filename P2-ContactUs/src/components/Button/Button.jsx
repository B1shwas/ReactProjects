import styles from './button.module.css'
const Button = ({text, icon,  isOutline}) => {
  return ( 
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button