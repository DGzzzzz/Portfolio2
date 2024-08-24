import Projeto from '../../Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './style'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          titulo="Efood"
          descricao="E-commerce de comida, desenvolvido com React, Redux, styled-components e typescript."
          githubLink="https://github.com/DGzzzzz/efood.git"
          vercelLink="https://dg-efood.vercel.app/"
        ></Projeto>
      </li>
      <li>
        <Projeto
          titulo="Buscador de Usuário do Github"
          descricao="Feito um site que busca o usuário no github e exibe seus repositórios públicos."
          githubLink="https://github.com/DGzzzzz/github_perfil"
          vercelLink="https://dg-github-perfil.vercel.app/"
        ></Projeto>
      </li>
      <li>
        <Projeto
          titulo="TDD com PostgreSQL"
          descricao="Aplicação Java para cadastro de clientes e produtos, utilizando um banco de dados PostgreSQL. "
          githubLink="https://github.com/DGzzzzz/projeto_jdbc.git"
        ></Projeto>
      </li>
      <li>
        <Projeto
          titulo="Agenda"
          descricao="Aplicação web para cadastro de contatos, desenvolvida com React, Redux, styled-components e typescript."
          githubLink="https://github.com/DGzzzzz/Agenda-react.git"
        ></Projeto>
      </li>
    </Lista>
  </section>
)

export default Projetos
