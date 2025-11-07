import { Header } from "../../../components/Header/header"; 
import styles from "./secao-inicio.module.css"

export function SecaoInicio(){
    return(
        <section>
            <Header></Header>

            <div className={styles.container}>
            <button></button>
            </div>
        </section>
    )
}