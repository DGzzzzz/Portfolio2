import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Olá! Meu nome é Douglas Winter, e sou um desenvolvedor apaixonado por
      tecnologia. Atualmente, estou cursando Análise e Desenvolvimento de
      Sistemas no Instituto Federal do RS e também estou me especializando em
      Java, com o curso de Desenvolvedor Full Stack Java na EBAC.
    </Paragrafo>
    <Titulo fontSize={16}>Comunidade do discord</Titulo>
    <Paragrafo>
      Junte-se na comunidade que estou construíndo no discord. Lá podemos trocar
      uma ideia, tirar dúvidas e se conectar com outras pessoas. Clique no ícone
      do discord na sidebar para entrar.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=DGzzzzz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DGzzzzz&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
