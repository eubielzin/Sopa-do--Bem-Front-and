import Botao from "./button"
import IconeDeMapa from "../assets/MapPin.svg"
type CardProps = {
  imagemLocal: string
  nome: string
  localizacao: string
  link?: string
}

export default function Card({ imagemLocal, nome, localizacao, link }: CardProps) {
  return (
    <div className="card">
      <div className="cabecalho-card">
        <img className="imagemLocal" src={imagemLocal} alt="" />
      </div>
      <h2>{nome}</h2>
      <p>{localizacao}</p>
      <Botao texto="Ver no Mapa" icone={IconeDeMapa} link={link} />
    </div>
  )
}