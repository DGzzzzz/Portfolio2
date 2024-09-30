import { useTranslation } from 'react-i18next'
import { ToggleButton, ToggleCircle, ToggleContainer } from './styles'
import { useState } from 'react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en')

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'pt' : 'en'
    i18n.changeLanguage(newLanguage)
    setIsEnglish(!isEnglish)
  }

  return (
    <ToggleContainer onClick={toggleLanguage}>
      <ToggleButton isActive={isEnglish}>
        <ToggleCircle isActive={isEnglish}>
          {isEnglish ? 'EN' : 'PT'}
        </ToggleCircle>
      </ToggleButton>
    </ToggleContainer>
  )
}

export default LanguageSwitcher
