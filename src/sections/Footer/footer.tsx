import style from './footer.module.css'
import logoFace from '../../assets/facebook.png'
import logoInsta from '../../assets/instagram.png'
import logoWpp from '../../assets/whatsapp.png'
import logoSopadoBem from '../../assets/logoSopadoBem.png'

export function Footer() {
  return (
      <footer className={style.rodape}>
        <div className={style.cabecalho}>
            <img src={logoSopadoBem} alt="logoSopadoBem"/>
            <h3>Nossos Membros</h3>
            <h3>Entregas</h3>
            <h3>Ajude-nos</h3>
            <h3>Pontos de Entrega</h3>
            <h3>Parcerias</h3>
            <h3>Fale Conosco</h3>
        </div>
        <div className={style.linha}></div>
        <div className={style.fim}>
            <img className={style.logos} src={logoFace} alt="logo facebook"/>
            <img className={style.logos} src={logoInsta} alt="logo instagram"/>
            <img className={style.logos} src={logoWpp} alt="logo whatsapp"/>
            <h4>Todos os direitos reservados © 2025 | POLÍTICA DE PRIVACIDADE</h4>
            <a href="#" className={style.voltarTopo}>voltar ao topo</a>
        </div>
    </footer>
);
}