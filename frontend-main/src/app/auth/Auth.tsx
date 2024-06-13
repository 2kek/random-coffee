'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Heading } from '@/components/ui/Heading'
import { CustomButton } from '@/components/ui/buttons/CustomButton'
import { Field } from '@/components/ui/fields/Field'

import { IAuthForm } from '@/types/auth.types'

import s from './Auth.module.scss'

import { authService } from '@/services/auth.service'
import { ButtonGroup, background, defineStyle } from '@chakra-ui/react'
import { errorCatch } from '@/api/error'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
    mutationKey: ['auth'], //ключ для мутации
    mutationFn: (data: IAuthForm) =>
      authService.main(isLoginForm ? 'login' : 'register', data),
    onSuccess() {
      toast.success('Вы успешно авторизовались!')
      reset()
      push('/lk') // после входа нужно в дашборд админки
    },
    onError(error: any) {
		const errorMessage = errorCatch(error);
    
		if (errorMessage) {
			toast.error(errorMessage); // Вывести сообщение об ошибке
		} else {
			console.log(error); 
		}
    }
  })


	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className={s.auth}>
			<div className={s.auth_logo}>
				<img src="/oggetto-light-theme-logo.png" alt="" />
			</div>
			<form className={s.auth__form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title='Авторизация' />

				<Field
					id='email'
					placeholder='Enter email:'
					type='email'
					{...register('email', {
						required: 'Email is required!'
					})}				/>

				<Field
					id='password'
					placeholder='Enter password: '
					type='password'
					{...register('password', {
						required: 'Password is required!'
					})}			/>
				<ButtonGroup gap='1' marginTop='10px'>
					<CustomButton colorScheme='yellow' onClick={() => setIsLoginForm(true)}>Войти</CustomButton>
					<CustomButton onClick={() => setIsLoginForm(false)}>Зарегистрироваться</CustomButton>
				</ButtonGroup>
			</form>
		</div>
	)
}
