import calendarioSopadoBem from '../assets/calendarioSopadoBem.jpg'
import './calendario.css'

export default function Calendario() {
    return (
        <section className="corpo">
            <h1 className="texto"> Confira o Calendario deste mês</h1>
            <section className="imagens">
                <img src={calendarioSopadoBem} alt="calendariodessemes"/>
                <img src={calendarioSopadoBem} alt="calendariodessemes"/>
                <img src={calendarioSopadoBem} alt="calendariodessemes"/>
                <img src={calendarioSopadoBem} alt="calendariodessemes"/>
            </section>
        </section>
    )
}