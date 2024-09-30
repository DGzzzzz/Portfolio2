import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'
import { useTranslation } from 'react-i18next'

const Sobre = () => {
  const { t } = useTranslation()

  return (
    <section>
      <Titulo fontSize={16}>{t('about_me')}</Titulo>
      <Paragrafo>{t('description')}</Paragrafo>
      <Titulo fontSize={16}>{t('join_discord')}</Titulo>
      <Paragrafo>{t('community_discord')}</Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=DGzzzzz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DGzzzzz&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
