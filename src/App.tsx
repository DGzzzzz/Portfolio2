import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Projetos from './containers/Projetos'
import Sidebar from './containers/sidebar'
import Sobre from './containers/Sobre'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import React from 'react'
import './i18n'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
        <EstiloGlobal />
        <Container>
          <Sidebar trocaTema={trocaTema} />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App
