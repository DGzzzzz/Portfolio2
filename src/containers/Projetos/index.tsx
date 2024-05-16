import Projeto from '../../Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './style'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          titulo="Timer Aniversário"
          descricao="Programado um timer com JavaScript que calcula o tempo que falta para o meu aniversário."
          githubLink="https://github.com/DGzzzzz/aniverTime"
          vercelLink="https://aniver-time.vercel.app/"
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
          titulo="CRUD com MySQL"
          descricao="Feito um CRUD, simulando uma agenda de contatos com Java e configurado o banco de dados no MySQL."
          githubLink="https://github.com/DGzzzzz/CRUD_MySQL"
        ></Projeto>
      </li>
      <li>
        <Projeto
          titulo="CRUD com Swing"
          descricao="Feito um CRUD, simulando um cadastro de cliente. Utilizada Java e a biblioteca Swing para interface gráfica."
          githubLink="https://github.com/DGzzzzz/Cliente_CRUD_Swing"
        ></Projeto>
      </li>
    </Lista>
  </section>
)

export default Projetos
