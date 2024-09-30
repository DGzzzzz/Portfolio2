import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer, Social } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Douglas Winter</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        DGzzzzz
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack
      </Descricao>
      <Social href="https://www.linkedin.com/in/dg-developer/" target="_blank">
        <i className="ri-linkedin-fill"></i>
      </Social>
      <Social
        href="https://www.instagram.com/douglas_winter96/?hl=pt-br"
        target="_blank"
      >
        <i className="ri-instagram-fill"></i>
      </Social>
      <Social href="https://github.com/DGzzzzz" target="_blank">
        <i className="ri-github-fill"></i>
      </Social>
      <Social href="https://discord.gg/Zun2bDpMDU" target="_blank">
        <i className="ri-discord-fill"></i>
      </Social>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
