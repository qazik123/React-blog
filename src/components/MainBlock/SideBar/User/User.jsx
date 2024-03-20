import React from 'react'
import './User.css'
import avatar from '../../../../images/avatar.jpg'

export default function User() {
	return (
		<div className='user'>
			<div className='avatar'>
				<img src={avatar} alt='avatar' />
			</div>
			<h3>Jhon</h3>
		</div>
	)
}
