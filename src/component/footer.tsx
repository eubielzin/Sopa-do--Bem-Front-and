import './footer.css'
import logoFace from '../assets/facebook.png'
import logoInsta from '../assets/instagram.png'
import logoWpp from '../assets/whatsapp.png'
import logoSopadoBem from '../assets/logoSopadoBem.png'

export default function Teste() {
  return (
      <footer className='rodape'>
        <div className="cabecalho">
            <img src={logoSopadoBem} alt="logoSopadoBem"/>
            <h3>Nossos Membros</h3>
            <h3>Entregas</h3>
            <h3>Ajude-nos</h3>
            <h3>Pontos de Entrega</h3>
            <h3>Parcerias</h3>
            <h3>Fale Conosco</h3>
        </div>
        <div className="linha"></div>
        <div className="fim">
            <img className="logos" src={logoFace} alt="logo facebook"/>
            <img className="logos" src={logoInsta} alt="logo instagram"/>
            <img className="logos" src={logoWpp} alt="logo whatsapp"/>
            <h4>Todos os direitos reservados © 2025 | POLÍTICA DE PRIVACIDADE</h4>
            <a href="#" className="voltarTopo">voltar ao topo</a>
        </div>
    </footer>
);
}