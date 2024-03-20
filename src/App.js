import './App.css'
import LoginPage from './components/Pages/LoginPage/LoginPage'
import MainBlock from './components/MainBlock/MainBlock'
import React from 'react'

function App() {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false)

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
