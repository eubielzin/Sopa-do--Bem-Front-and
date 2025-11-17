//Estrutura dos cards
import Card from "../../component/card"
//Estilização deste arquivo
import "./pontosEntrega.css"
//Importações da imagens
import PracaDeodoro from "../../assets/localdeodoro.png"
import MercadoCentral from "../../assets/localmercado-central.png"
import SocorraoI from "../../assets/localsocorraoI.png"
import HospitalGeral from "../../assets/localhospital-geral.png"
import SantaCasa from "../../assets/localsanta-casa.png"
export function Entrega() {
    return (
        <div id="Entrega" className="secaoEntrega">
            <h1>Nosso Pontos De Entrega</h1>
            <div className="Cards">
            <Card imagemLocal={PracaDeodoro} nome="Praça deodoro" localizacao="Avenida Gomes de Castro, Centro" link="https://surl.li/tjoswc" />
            <Card imagemLocal={MercadoCentral} nome="Mercado Central" localizacao="Av. Guaxenduba, Centro" link="https://surl.lt/xmlrcb"/>
            <Card imagemLocal={SocorraoI} nome="Socorrão I" localizacao="Rua do Passeio, S/N, Centro" link="https://surl.li/xwwucd"/>
            <Card imagemLocal={HospitalGeral} nome="Hospital Geral" localizacao="R. São Pantaleão, 02 , Centro" link="https://surl.li/qmhkro"/>
            <Card imagemLocal={SantaCasa} nome="Santa Casa" localizacao="R. do Norte, 233, Centro" link="https://surl.li/brltvu"/>
            </div>
        </div>
    )
}
