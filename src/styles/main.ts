import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #ffec06;
  text-align: center;
`
export const H1 = styled.h1`
  font-size: 72px;
  font-weight: 500;
  text-shadow: ${props => props.theme.shadows.defaultShadow};
  @media only screen and (max-width: 1080px) {
    font-size: 7vw;
    }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 32px;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 1080px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Button = styled.button`
  width: 527px;
  height: 234px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 32px;
  color: #fff;
  font-size: 64px;
  border: 1px solid ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.defaultShadow};
  outline: none;
  @media only screen and (max-width: 1080px) {
  width: 80vw;
  height: 20vh;
  font-size: 7vw;
  margin-top: 32px;
  }
`
