import styles from './Button.module.css'
const Button = ({isOutLine,text,icon,...rest}) => {
  return (
    <button {...rest} className={isOutLine ? styles.outLine_btn :styles.    primarybutton}>
      {icon}
      {text}
    </button>
  )
};
export default Button;
