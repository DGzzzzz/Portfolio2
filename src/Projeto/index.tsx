import Paragrafo from '../components/Paragrafo'
import Titulo from '../components/Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas com vueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
