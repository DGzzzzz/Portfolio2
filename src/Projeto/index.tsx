import Paragrafo from '../components/Paragrafo'
import Titulo from '../components/Titulo'
import { Card, LinkBotao } from './styles'

interface ProjetoProps {
  titulo: string
  descricao: string
  githubLink?: string
  vercelLink?: string
}

const Projeto: React.FC<ProjetoProps> = ({
  titulo,
  descricao,
  githubLink,
  vercelLink
}) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    {githubLink && (
      <a target="blank_" href={githubLink}>
        <LinkBotao>Github</LinkBotao>
      </a>
    )}
    {vercelLink && (
      <a target="blank_" href={vercelLink}>
        <LinkBotao>Vercel</LinkBotao>
      </a>
    )}
  </Card>
)

export default Projeto
