import React from 'react'
import './EditFormPost.css'
import { MdCancel } from 'react-icons/md'
import { setPostsToLocalStorage } from '../../../../utiles/helpers'
// import { setPostsToLocalStorage } from '../../../../../utiles/helpers.js'

export default function EditFormPost({ setShowEditForm, selectedPost, setBlogPosts, blogPosts }) {
	const [postTitle, setPostTitle] = React.useState(selectedPost.title)
	const [postDescription, setPostDescription] = React.useState(
		selectedPost.description
	)

	const handlePostTitleChange = e => {
		setPostTitle(e.target.value)
	}

	const handlePostDescChange = e => {
		setPostDescription(e.target.value)
	}

	// редактирование поста и сохранение отредакт поста

	const editPost = e => {
		e.preventDefault()

		const updatedPost = {
			...selectedPost,
			title:postTitle,
			description: postDescription,
			// id: selectedPost.id,
			// title:postTitle,
			// description: postDescription,
			// image: selectedPost.image
			// liked: selectedPost.liked
		}

		const updatedPosts = blogPosts.map((post) => {
			if (post.id === selectedPost.id){
				return updatedPost
			}else {
				return post
			} 
		})

		setBlogPosts(updatedPosts)
		setPostsToLocalStorage(updatedPosts)
		setShowEditForm(false)
	}

	return (
		<>
			<form className='editPostForm' onSubmit={editPost}>
				<button className='hideBtn' onClick={() => setShowEditForm(false)}>
					<MdCancel />
				</button>
				<h2>Редактирование поста</h2>
				<div>
					<input
						className='editFormInput'
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
						className='editFormInput'
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
						Сохранить пост
					</button>
				</div>
			</form>
			<div className='_overlay' onClick={() => setShowEditForm(false)}></div>
		</>
	)
}
