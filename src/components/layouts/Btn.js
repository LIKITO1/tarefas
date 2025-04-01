import styles from "./Btn.module.css"
function Btn({text,classe,click}){
    return(
        <>
            <button className={`${styles[classe]} ${styles.principal}`} onClick={click}>{text}</button>
        </>
    )
}
export default Btn