import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      description: 'Description',
      change_theme: 'Change theme',
      join_discord: 'Join our Discord community'
    }
  },
  pt: {
    translation: {
      description: 'Descrição',
      change_theme: 'Trocar tema',
      join_discord: 'Junte-se na comunidade do Discord'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt', // default language
  interpolation: {
    escapeValue: false
  }
})

export default i18n
