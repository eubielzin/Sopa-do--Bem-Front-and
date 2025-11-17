import Botao from "./button"
import IconeDeMapa from "../assets/MapPin.svg"
type CardProps = {
  imagemLocal: string
  nome: string
  localizacao: string
  estiloCard: any
  link?: string
}

export default function Card({estiloCard, imagemLocal, nome, localizacao, link }: CardProps) {
  return (
    <div className={estiloCard?.card || ""}>
      <div className={estiloCard?.cabecalhoCard || ""}>
        <img className={estiloCard?.imagemLocal || ""} src={imagemLocal} alt="" />
      </div>
      <h2>{nome}</h2>
      <p>{localizacao}</p>
      <Botao texto="Ver no Mapa" icone={IconeDeMapa} link={link} />
    </div>
  )
}