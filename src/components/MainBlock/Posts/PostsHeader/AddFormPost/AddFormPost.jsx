import React from 'react'
import './AddFormPost.css'
import { MdCancel } from 'react-icons/md'
// import { setPostsToLocalStorage } from '../../../../../utiles/helpers.js'
import { POSTS_URL } from '../../../../../utiles/constants.js'

export default function AddFormPost({
	setShowAddForm,
	blogPosts,
	setBlogPosts,
}) {
	const [postTitle, setPostTitle] = React.useState('')
	const [postDescription, setPostDescription] = React.useState('')

	const handlePostTitleChange = e => {
		setPostTitle(e.target.value)
	}

	const handlePostDescChange = e => {
		setPostDescription(e.target.value)
	}

	const createPost = e => {
		e.preventDefault()

		const newPost = {
			// id: blogPosts.length + 1,
			title: postTitle,
			description: postDescription,
			liked: false,
			image: blogPosts[0].image,
		}

		fetch(POSTS_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPost),
		})
		.then((res) => res.json())
		.then((newPostFromServer) => {
			const updatedPosts = [...blogPosts, newPostFromServer]
			setBlogPosts(updatedPosts);
			setShowAddForm(false)
		})
		.catch((error) => console.log(error))
	}



	const handleAddFormHide = () => {
		setShowAddForm(false)
	}

	return (
		<>
			<form className='addPostForm' onSubmit={createPost}>
				<button className='hideBtn' onClick={handleAddFormHide}>
					<MdCancel />
				</button>
				<h2>Создание поста</h2>
				<div>
					<input
						className='addFormInput'
						type='text'
						name='postTitle'
						placeholder='Заголовок поста'
						value={postTitle}
						onChange={handlePostTitleChange}
						required
					/>
				</div>
				<div>
					<textarea
						className='addFormInput'
						name='postDescription'
						placeholder='Описание поста'
						value={postDescription}
						onChange={handlePostDescChange}
						rows={8}
						required
					/>
				</div>
				<div>
					<button className='blackBtn' type='submit'>
						Добавить пост
					</button>
				</div>
			</form>
			<div onClick={() => setShowAddForm(false)} className='_overlay'></div>
		</>
	)
}
