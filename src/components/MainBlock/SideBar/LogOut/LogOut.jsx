import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import './LogOut.css'

export default function LogOut({ setIsLoggedIn }) {
	const logOut = () => {
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
