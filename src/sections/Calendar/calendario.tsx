import calendarioSopadoBem from '../../assets/calendarioSopadoBem.jpg'
import styles from './calendario.module.css'

export function Calendario() {
    return (
        <section className={styles.corpo}>
            <h1 className={styles.texto}> Confira o Calendario deste mês</h1>
            <section className={styles.imagens}>
                <img src={calendarioSopadoBem} alt="calendariodessemes"/>
                <img src={calendarioSopadoBem} alt="calendariodessemes"/>
                <img src={calendarioSopadoBem} alt="calendariodessemes"/>
                <img src={calendarioSopadoBem} alt="calendariodessemes"/>
            </section>
        </section>
    )
}