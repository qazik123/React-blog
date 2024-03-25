import React from 'react'
import PostsHeader from './PostsHeader/PostsHeader'
import Post from './Post/Post'
import './Posts.css'
import { POSTS } from '../../../utiles/constants'
import { setPostsToLocalStorage } from '../../../utiles/helpers.js'
import EditFormPost from './EditFormPost/EditFormPost.jsx'

export default function Posts() {
	// ИЗМЕНЕНИЕ СОСТОЯНИЯ ПОСТА
	const [blogPosts, setBlogPosts] = React.useState(
		// ПОЛУЧАЕМ ИЗМЕНЕННІЕ ДАННИЕ ИЗ ЛОКАЛ СТОРЕДЖ КАК ДЕФОЛТНОЕ ЗНАЧЕНИЕ. ЕСЛИ ЧТОТО ЕСТЬ В МАСИВЕ измененном blogPosts, то дефолтное знач берется из ЛОКАЛ СТОРЕДЖ, А ЕСЛИ НЕТ ТО ПО ДЕФОЛТУ БУДЕТ МАСИВ POSTS
		JSON.parse(localStorage.getItem('blogPosts')) || POSTS
	)

	// ДОБАВЛЕНИЕ ЛАЙКА НА ПОСТ И СОХРАНЕНИЕ В ЛОКАЛ СТОРЕДЖ
	const likePost = pos => {
		const updatedPosts = [...blogPosts]
		updatedPosts[pos].liked = !updatedPosts[pos].liked
		// localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
		setPostsToLocalStorage(updatedPosts)
		setBlogPosts(updatedPosts)
	}
	// УДАЛЕНИЕ ПОСТА И ЗАПИСЬ СОСТОЯНИЯ В ЛОКАЛ СТОРЕДЖ
	const deletePost = postId => {
		const isDelete = window.confirm('Удалить пост?')
		if (isDelete) {
			const updatedPosts = blogPosts.filter(post => {
				return post.id !== postId
			})
			setPostsToLocalStorage(updatedPosts)
			setBlogPosts(updatedPosts)
		}
	}

	// ДОБАВЛЕНИЕ ПОСТА И ЗАПИСЬ В ЛОКАЛ СТОРЕДЖ
	const addNewPost = () => {}

	// ВИБОР ОТДЕЛЬНОГО ПОСТА И РЕДАКТИРОВАНИЕ ПОСТА
	const [selectedPost, setSelectedPost] = React.useState({})
	const [showEditForm, setShowEditForm] = React.useState(false)

	const selectPost = pos => {
		setSelectedPost(blogPosts[pos])
		setShowEditForm(true)
	}

	return (
		<div className='postsWrapper'>
			<PostsHeader setBlogPosts={setBlogPosts} blogPosts={blogPosts} />
			<section className='posts'>
				{blogPosts.map((post, pos) => {
					return (
						<Post
							title={post.title}
							description={post.description}
							liked={post.liked}
							image={post.image}
							likePost={() => likePost(pos)}
							deletePost={() => deletePost(post.id)}
							selectPost={() => selectPost(pos)}
							ket={post.id}
						/>
					)
				})}
			</section>

			{showEditForm && (
				<EditFormPost
					selectedPost={selectedPost}
					setShowEditForm={setShowEditForm}
					setBlogPosts={setBlogPosts}
					blogPosts={blogPosts}
				/>
			)}
		</div>
	)
}
