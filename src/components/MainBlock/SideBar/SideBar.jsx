import React from 'react'
import './SideBar.css'
import Navigation from './Navigation/Navigation'
import User from './User/User'
import LogOut from './LogOut/LogOut'




export default function SideBar({ setIsLoggedIn }) {
	return (
		<aside className='sideBar'>
			<section className='sideBarTop'>
				<User />
				<Navigation />
			</section>
			<section className='sideBar-bottom'>
				<LogOut setIsLoggedIn={setIsLoggedIn} />
			</section>
		</aside>
	)
}
