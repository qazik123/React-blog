import React from 'react'
import SearchForm from './SearchForm/SearchForm'
import AddFormPost from './AddFormPost/AddFormPost'
import './PostsHeader.css'

export default function PostsHeader({ blogPosts, setBlogPosts }) {
	const [showAddForm, setShowAddForm] = React.useState(false)

	return (
		<section className='postsHeader'>
			<h1>Posts</h1>
			<div>
				<button onClick={() => setShowAddForm(true)} className='blackBtn'>
					Создать пост
				</button>
				<SearchForm />
			</div>
			{showAddForm && (
				<AddFormPost
					blogPosts={blogPosts}
					setBlogPosts={setBlogPosts}
					setShowAddForm={setShowAddForm}
				/>
			)}
		</section>
	)
}
