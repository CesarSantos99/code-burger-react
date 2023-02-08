import React from 'react'

import LoginImg from '../../assets/logo-hamburguer.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  P,
  Input,
  Button,
  SignIntLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="Logo-hamburguer" />
      <ContainerItens>
        <img src={Logo} alt="CodeBurguer" />
        <h1>Login</h1>

        <P>Email</P>
        <Input />

        <P>Senha</P>
        <Input />

        <Button>Sign In</Button>

        <SignIntLink>
          Não possui conta ? <a> SignUp</a>
        </SignIntLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
