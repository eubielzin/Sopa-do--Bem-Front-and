import styles from './header.module.css'

export function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <div>
                    <img src="src/components/Header/logo.png" alt="logo-da-sopa" />
                </div>

                <ul className={styles['nav-links']} >

                    <li> <a href="#Entregas"></a></li>
                    <li> <a href="Entregas"></a></li>
                    <li> <a href="Ajude-nós"></a></li>
                    <li> <a href="Pontos de Entregas"></a></li>
                    <li> <a href="Parcerias"></a></li>
                    <li> <a href="Fale conosco"></a></li>
                    <button> <a href="Aniversariantes"></a></button>


                </ul>

            </nav>
        </header>
    )
}