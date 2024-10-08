import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 20px;
`
export const Social = styled.a`
  margin-right: 16px;
  color: ${(props) => props.theme.corPrincipal};
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`

export const TogglesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px; /* Espaço entre os botões */
  margin-top: 20px;
`
