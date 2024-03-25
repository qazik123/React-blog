import React from 'react'
import './LoginPage.css'

export default function LoginPage({ setIsLoggedIn }) {
	const loginRef = React.useRef()
	const passwordRef = React.useRef()
	// Отправка формі авторизации
	const handleSubmit = () => {
		const userData = {
			login: loginRef.current.value,
			password: passwordRef.current.value,
		}

		console.log(userData)

		localStorage.setItem('isLoggedIn', true)

		setIsLoggedIn(true)
	}

	return (
		<form onSubmit={handleSubmit} className='loginForm'>
			<h1>Вход</h1>
			<div>
				<input
					ref={loginRef}
					type='text'
					placeholder='Логин'
					name='login'
					required
				/>
			</div>
			<div>
				<input
					ref={passwordRef}
					type='password'
					placeholder='Пароль'
					name='password'
					required
				/>
			</div>
			<div>
				<button type='submit'>Войти</button>
			</div>
		</form>
	)
}
