import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
      reiciendis repellat voluptatum iste maxime quidem obcaecati placeat
      voluptatem dicta! Molestiae pariatur vel at placeat ad assumenda, ex
      fugit? Odio, alias.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=DGzzzzz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DGzzzzz&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
