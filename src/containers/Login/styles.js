import styled from 'styled-components'

import Background from '../../assets/fundo.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 80%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 40px;
  }
`

export const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 15px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  border: ${props => (props.error ? '3px solid #CC1717' : 'none')};
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #cc1717;
  margin-top: 3px;
`

export const SignIntLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
