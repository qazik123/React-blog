import React from 'react'
import './Navigation.css'
import { FaRegStar, FaAddressBook} from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'

export default function Navigation() {
	return (
		<nav className='nav'>
			<a href='/' className='active'>
				<FaAddressBook className='navSvg' />
				<span>Blog</span>
			</a>
			<a href='/'>
				<IoSettings className='navSvg' />
				<span>Favorite</span>
			</a>
			<a href='/'>
				<FaRegStar className='navSvg' />
				<span>Settings</span>
			</a>
		</nav>
	)
}
