import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import './LogOut.css'

export default function LogOut({ setIsLoggedIn }) {
	const logOut = () => {
// Удаление данних из локал сторедж
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

	return (
		<div className='logOut-button'>
			<button onClick={logOut}>
				<FaLongArrowAltLeft className='logOutSvg' />
				<span>Виход</span>
			</button>
		</div>
	)
}
