import Botao from "./button"
import IconeDeMapa from "../assets/MapPin.svg"
type CardProps = {
  imagemLocal: string
  nome: string
  localizacao: string
  link?: string
}

export default function Card({ imagemLocal, nome, localizacao, link}: CardProps) {
  return (
    <div className="card">
      <img src={imagemLocal} alt="" />
      <h2>{nome}</h2>
      <p>{localizacao}</p>
      <Botao texto="Ver no Mapa" icone={IconeDeMapa} link={link}/>
    </div>
  )
}