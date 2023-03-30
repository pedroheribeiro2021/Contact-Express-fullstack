import * as yup from 'yup'

export const RegisterUserSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Informe um E-mail válido'),
    password: yup
    .string()
    .matches(/.{8,}/, 'Deve ter no minimo 8 caracteres')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
    .matches(/(\W)|_/, 'Deve conter um caracter especial')
    .required('Senha obrigatória'),
    passwordConfirm: yup
    .string()
    .oneOf(
        [yup.ref('password')],
        'Confirmação de senha deve ser identica a senha'
    ),
    phone: yup.string().required('Contato obrigatório'),
})

export const RegisterContactSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Informe um E-mail válido'),
    phone: yup.string().required('Contato obrigatório'),
})