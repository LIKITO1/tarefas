import {Link} from "react-router-dom"
import styles from "./Menu.module.css"
function Menu(){
    return(
        <nav className="d-flex align-items-center justify-content-center">
            <Link to="/" className={styles.link}>Home</Link>
        </nav>
    )
}
export default Menu