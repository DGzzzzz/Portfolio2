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
          descricao="E-commerce de restaurantes, onde podemos visualizar o cardápio e fazer pedidos. Desenvolvido com React, Redux, styled-components e typescript."
          githubLink="https://github.com/DGzzzzz/efood.git"
          vercelLink="https://dg-efood.vercel.app/"
        ></Projeto>
      </li>
      <li>
        <Projeto
          titulo="FocalPoint"
          descricao="Desenvolvido com React, SCSS, NextJS e typescript. Gerenciamento de estado, para cadastro de tarefas, exclusão e marcar como concluída."
          githubLink="https://github.com/DGzzzzz/legaplan.git"
          vercelLink="https://dg-focalpoint.vercel.app/"
        ></Projeto>
      </li>
      <li>
        <Projeto
          titulo="ToDo FullStack"
          descricao="Aplicação web de lista de tarefas, com backend em Node.js e frontend com HTML, CSS e JS. Utilizado docker para gerar imagem do MySQL."
          githubLink="https://github.com/DGzzzzz/ToDo-FullStack.git"
        ></Projeto>
      </li>
      <li>
        <Projeto
          titulo="Exoplanets Exploration - Projeto para hackathon NASA"
          descricao="Aplicação web que consome a API da NASA para exibir informações sobre exoplanetas. Construida com a lib Three.js."
          githubLink="https://github.com/DGzzzzz/Hackathon-NASA.git"
        ></Projeto>
      </li>
      <li>
        <Projeto
          titulo="BOT Discord - Projeto em constante atualização"
          descricao="Bot para Discord, desenvolvido com Node.js e a lib discord.js. Possui comandos básicos, como mensagem de boas-vindas. Deploy na Render."
          githubLink="https://github.com/DGzzzzz/DiscordBotJS.git"
        ></Projeto>
      </li>
      <li>
        <Projeto
          titulo="API NCM"
          descricao="Aplicação web que consome a API Brasil.io para exibir informações sobre NCMs. Construida com HTML, Bootstrap e JS."
          githubLink="https://github.com/DGzzzzz/api_ncm.git"
        ></Projeto>
      </li>
    </Lista>
  </section>
)

export default Projetos
