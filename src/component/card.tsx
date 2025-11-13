import Botao from "./button"
import IconeDeMapa from "../assets/MapPin.svg"
type CardProps = {
  imagemLocal: string
  nome: string
  localizacao: string
  link?: string
}

<<<<<<< HEAD
export default function Card({ imagemLocal, nome, localizacao, link }: CardProps) {
=======
export default function Card({ imagemLocal, nome, localizacao, link}: CardProps) {
>>>>>>> feat/participantes
  return (
    <div className="card">
      <div className="cabecalho-card">
        <img className="imagemLocal" src={imagemLocal} alt="" />
      </div>
<<<<<<< HEAD
      <h2>{nome}</h2>
      <p>{localizacao}</p>
      <Botao texto="Ver no Mapa" icone={IconeDeMapa} link={link} />
=======
      
      <h2>{nome}</h2>
      <p>{localizacao}</p>
      <Botao texto="Ver no Mapa" icone={IconeDeMapa} link={link}/>
>>>>>>> feat/participantes
    </div>
  )
}