import styles from "./pontosEntrega.module.css"
//Estrutura dos cards
import Card from "../../component/card"
//Estilização deste arquivo

//Importações da imagens
import PracaDeodoro from "../../assets/localdeodoro.png"
import MercadoCentral from "../../assets/localmercado-central.png"
import SocorraoI from "../../assets/localsocorraoI.png"
import HospitalGeral from "../../assets/localhospital-geral.png"
import SantaCasa from "../../assets/localsanta-casa.png"
export function Entrega() {
    return (
        <div id="Entrega" className={styles.secaoEntrega}>
            <h1>Nossos Pontos De Entrega</h1>
            <div className={styles.Cards}>
            <Card estiloCard={styles} imagemLocal={PracaDeodoro} nome="Praça deodoro" localizacao="Avenida Gomes de Castro, Centro" link="https://surl.li/tjoswc" />
            <Card estiloCard={styles} imagemLocal={MercadoCentral} nome="Mercado Central" localizacao="Av. Guaxenduba, Centro" link="https://surl.lt/xmlrcb"/>
            <Card estiloCard={styles} imagemLocal={SocorraoI} nome="Socorrão I" localizacao="Rua do Passeio, S/N, Centro" link="https://surl.li/xwwucd"/>
            <Card estiloCard={styles} imagemLocal={HospitalGeral} nome="Hospital Geral" localizacao="R. São Pantaleão, 02 , Centro" link="https://surl.li/qmhkro"/>
            <Card estiloCard={styles} imagemLocal={SantaCasa} nome="Santa Casa" localizacao="R. do Norte, 233, Centro" link="https://surl.li/brltvu"/>
            </div>
        </div>
    )
}
