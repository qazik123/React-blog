import React from 'react'
import SideBar from './SideBar/SideBar'
import Posts from './Posts/Posts'
import './MainBlock.css'



export default function MainBlock({ setIsLoggedIn }) {
	return (
		<>
			<SideBar setIsLoggedIn={setIsLoggedIn} />
			<main className='mainBlock'>
				<Posts />
			</main>
		</>
	)
}
