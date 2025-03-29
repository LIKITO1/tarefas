import styles from "./CriarTarefa.module.css"
function CriarTarefa(){
    return(
        <div className={`container d-flex align-items-center justify-content-center ${styles.alinhamento}`}>
            <form className={`form card h-100 w-50 ${styles.formulario}`}>
                <h1>Criar Tarefa</h1>
                <label>Nome:</label>
                <input className="form-control"></input>
                <label>Descrição:</label>
                <textarea  className="form-control"></textarea>
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </div>
    )
}
export default CriarTarefa;