import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './SearchForm.css'

export default function SearchForm() {
  return (
		<form className='searchForm'>
			<input type='text' placeholder='Найти' />
			<FaSearch className='searchSvg'/>
		</form>
	)
}
