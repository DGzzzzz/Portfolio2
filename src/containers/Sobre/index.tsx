import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Olá, me chamo Douglas e sou Desenvolvedor Full Stack. Estou todos os dias
      aprimorando o que já aprendi e buscando novas ferramentas. Cursando ADS no
      IFRS, progredindo no curso da EBAC e buscando uma oportunidades no mercado
      de trabalho.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=DGzzzzz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DGzzzzz&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
