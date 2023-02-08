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
  height: 70%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 120px;
  }
`

export const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`

export const Button = styled.button`
  width: 183px;
  height: 36px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;
  margin-top: 75px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const SignIntLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  margin-top: 30px;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
