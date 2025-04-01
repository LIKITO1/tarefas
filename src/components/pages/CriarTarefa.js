import styles from "./CriarTarefa.module.css"
import {useState} from "react"
import Message from "../layouts/Message"
function CriarTarefa(){
    const [nome,setNome]=useState();
    const [description,setDescription]=useState();
    const [message,setMessage]=useState()
    const [type,setType]=useState()
    async function enviar(e){
        e.preventDefault()
        await fetch("http://localhost:5000/criando",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({nome,description})
        }).then((res)=>res.json()).then((response)=>{
            setMessage("Tarefa Cadastrada")
            setType("success")
        }).catch((err)=>{
            setMessage("Erro ao cadastrar tarefa")
            setType("error")
        })
    }
    return(
        <div className={`container d-flex align-items-center justify-content-center ${styles.alinhamento}`}>
            <form className={`form card h-100 w-50 bg-dark text-light ${styles.formulario}`} onSubmit={enviar}>
                <h1>Criar Tarefa</h1>
                <label>Nome:</label>
                <input className="form-control w-75" onChange={(e)=>{setNome(e.target.value)}}></input>
                <label>Descrição:</label>
                <textarea  className="form-control w-75" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
            {message&&message.length>0&&(
                <Message msg={message} type={type}/>
            )}
        </div>
    )
}
export default CriarTarefa;