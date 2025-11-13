import './donate.css'
import Gift from '../assets/Gift.svg'
import Chat from '../assets/Chat.svg'
import Volunteering from '../assets/Volunteering.svg'

export default function Donate() {
    return (
        <div className='corpo'>
            <section className="cabecalho">
                <h1>Ajude-nos</h1>
                <h3>Junte-se à nossa missão. Seja Voluntário, doe, defenda, comece hoje</h3>
            </section>
            <section className="cards">
                <div className="card">
                    <img src={Volunteering} alt="Voluntaria-se"/>
                    <h3>Voluntarie-se</h3>
                    <p className="texto">Junte-se à nossa equipe de voluntários dedicados e ajude a fazer a diferença na sua comunidade.</p>
                    <button className="botao">clique aqui</button>
                </div>
                <div className="card">
                    <img src={Gift} alt="Doacoes"/>
                    <h3>Doações</h3>
                    <p className="texto">Suas generosas doações nos ajudam a fornecer refeições e apoio aos necessitados.</p>
                    <button className="botao">clique aqui</button>
                </div>
                <div className="card">
                    <img src={Chat}/>
                    <h3>Divulgue</h3>
                    <p className="texto">Ajude-nos a alcançar mais pessoas compartilhando nossa missão com sua rede.</p>
                    <button className="botao">clique aqui</button>
                </div>
            </section>
        </div>
    )
}