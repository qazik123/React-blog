import './App.css'
import LoginPage from './components/Pages/LoginPage/LoginPage'
import MainBlock from './components/MainBlock/MainBlock'
import React from 'react'

function App() {
	const [isLoggedIn, setIsLoggedIn] = React.useState(
// сохранение данних в локал сторедж
		localStorage.getItem('isLoggedIn') === 'true'
	)

	return (
		<div className='App'>
			{isLoggedIn ? (
				<MainBlock setIsLoggedIn={setIsLoggedIn} />
			) : (
				<LoginPage setIsLoggedIn={setIsLoggedIn} />
			)}
		</div>
	)
}

export default App
