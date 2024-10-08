import styled from 'styled-components'

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const ToggleButton = styled.button<{ isActive: boolean }>`
  width: 50px;
  height: 30px;
  background-color: ${(props) => props.theme.corPrincipal};
  border-radius: 15px;
  position: relative;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: ${({ isActive }) => (isActive ? 'flex-end' : 'flex-start')};
  padding: 0 5px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`
export const ToggleCircle = styled.div<{ isActive: boolean }>`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.corDeFundo};
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: ${({ isActive }) => (isActive ? 'calc(100% - 27.5px)' : '2.5px')};
  transition: left 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${(props) => props.theme.corPrincipal};
`
