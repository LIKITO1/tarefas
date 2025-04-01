import styles from "./Message.module.css"
import {useRef,useEffect} from "react"
function Message({msg,type,time}){
    const tag=useRef(null)
    useEffect(()=>{
    if(time==null||time==""){
        time=3000
    }
    const timeout=setTimeout(()=>{
        tag.current.style.display="none"
        console.log(time)
    },time)
},[time])
    return(
        <>
            <div ref={tag} className={`${styles[type]} ${styles.mensagem} d-flex align-items-center justify-content-center`} onChange={(e)=>{setMessage(e)}}>{msg}</div>
        </>
    )
}
export default Message