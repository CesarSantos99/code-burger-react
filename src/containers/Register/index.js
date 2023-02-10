import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/segundo-logo.svg'
import Button from '../../components/Button'
import apiCodeBurger from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  P,
  Input,
  SignIntLink,
  ErrorMessage
} from './styles'

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigarória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigarória')
      .oneOf([Yup.ref('password')], 'a senha devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await apiCodeBurger.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Register-Logo" />
      <ContainerItens>
        <img src={Logo} alt="CodeBurguer" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <P error={errors.name?.message}>Nome</P>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <P error={errors.email?.message}>Email</P>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <P error={errors.password?.message}>Senha</P>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <P error={errors.confirmPassword?.message}>Confirmar Senha</P>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 20 }}>
            Sign Up
          </Button>
        </form>

        <SignIntLink>
          Já possui conta ? <a> Sign In</a>
        </SignIntLink>
      </ContainerItens>
    </Container>
  )
}

export default Register