import { useTranslation } from 'react-i18next'
import Projeto from '../../Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './style'

const Projetos = () => {
  const { t } = useTranslation()

  return (
    <section>
      <Titulo fontSize={16}>{t('projects')}</Titulo>
      <Lista>
        <li>
          <Projeto
            titulo="Efood"
            descricao={t('project_descriptions.efood')}
            githubLink="https://github.com/DGzzzzz/efood.git"
            vercelLink="https://dg-efood.vercel.app/"
          ></Projeto>
        </li>
        <li>
          <Projeto
            titulo="FocalPoint"
            descricao={t('project_descriptions.focalpoint')}
            githubLink="https://github.com/DGzzzzz/legaplan.git"
            vercelLink="https://dg-focalpoint.vercel.app/"
          ></Projeto>
        </li>
        <li>
          <Projeto
            titulo="ToDo FullStack"
            descricao={t('project_descriptions.todo_fullstack')}
            githubLink="https://github.com/DGzzzzz/ToDo-FullStack.git"
          ></Projeto>
        </li>
        <li>
          <Projeto
            titulo={t('title_projects.exoplanets')}
            descricao={t('project_descriptions.exoplanets')}
            githubLink="https://github.com/DGzzzzz/Hackathon-NASA.git"
          ></Projeto>
        </li>
        <li>
          <Projeto
            titulo="BOT Discord - Projeto em constante atualização"
            descricao={t('project_descriptions.discord_bot')}
            githubLink="https://github.com/DGzzzzz/DiscordBotJS.git"
          ></Projeto>
        </li>
        <li>
          <Projeto
            titulo="API NCM"
            descricao={t('project_descriptions.api_ncm')}
            githubLink="https://github.com/DGzzzzz/api_ncm.git"
          ></Projeto>
        </li>
      </Lista>
    </section>
  )
}

export default Projetos
