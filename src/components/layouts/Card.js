import styles from "./Card.module.css"
function Card({titulo}){
    return(
        <div className="card bg-dark text-light mt-5 d-flex align-items-center justify-content-around p-2 rounded-5 flex-row w-75">
            <h1 className={styles.title}>{titulo}</h1>
            <button className={`btn btn-danger`}>Apagar</button>
        </div>
    )
}
export default Card