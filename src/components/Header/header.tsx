import styles from './header.module.css'

export function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.menu}>
                    <img className={styles.logo} src="src/assets/logo.png" alt="" />

                    <ul className={styles['nav-links']} >
                        <li> <a href="Membros">Membros</a></li>
                        <li> <a href="Entregas">Entregas</a></li>
                        <li> <a href="Ajude-nós">Ajude-nós</a></li>
                        <li> <a href="Pontos de Entregas">Pontos de Entregas</a></li>
                        <li> <a href="Parcerias">Parcerias</a></li>
                        <li> <a href="Fale conosco">Fale conosco</a></li>                        
                    </ul>
                    <button className={styles.botao}> <a href="Aniversariantes">Aniversariantes</a></button>
                </div>
                
            </nav>
            <div className={styles.imgfundo}>
                <img className={styles.logoPrincipal} src="src/assets/logo.sopa.png" alt="" />
            </div>

        </header>
    )
}