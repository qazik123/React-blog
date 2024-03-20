import React from 'react'
import SearchForm from './SearchForm/SearchForm'
import './PostsHeader.css'

export default function PostsHeader() {
  return (
		<section className='postsHeader'>
			<h1>Posts</h1>
            <SearchForm/>
		</section>
	)
}
