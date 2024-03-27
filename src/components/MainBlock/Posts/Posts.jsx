import React from 'react'
import PostsHeader from './PostsHeader/PostsHeader'
import Post from './Post/Post'
import './Posts.css'
// import { POSTS } from '../../../utiles/constants'
// import { setPostsToLocalStorage } from '../../../utiles/helpers.js'
import EditFormPost from './EditFormPost/EditFormPost.jsx'
import { POSTS_URL } from './../../../utiles/constants.js'
import { useFetchPosts } from '../../../utiles/Hooks.js'

export default function Posts() {

	const { blogPosts, setBlogPosts, isLoading, error } = useFetchPosts(POSTS_URL)


	// ДОБАВЛЕНИЕ ЛАЙКА через API
	const likePost = pos => {
		const updatedPosts = [...blogPosts]
		updatedPosts[pos].liked = !updatedPosts[pos].liked

		fetch(POSTS_URL + updatedPosts[pos].id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedPosts[pos]),
		})
			.then(res => res.json())
			.then(updatedPostFromServer => {
				updatedPosts[pos] = updatedPostFromServer;
				setBlogPosts(updatedPosts)

			})
			.catch(error => console.log(error))
	}




	// УДАЛЕНИЕ ПОСТА И ЗАПИСЬ СОСТОЯНИЯ через API
	const deletePost = postId => {
		const isDelete = window.confirm('Удалить пост?')

		if (isDelete) {
			fetch(POSTS_URL + postId, {
				method: 'DELETE',
			})
				.then(() => setBlogPosts(blogPosts.filter((post) => post.id !== postId)))
				.catch(error => console.log(error))
			};
		};





	// ВИБОР ОТДЕЛЬНОГО ПОСТА И РЕДАКТИРОВАНИЕ ПОСТА
	const [selectedPost, setSelectedPost] = React.useState({})
	const [showEditForm, setShowEditForm] = React.useState(false)

	const selectPost = post => {
		setSelectedPost(post)
		setShowEditForm(true)
	}

	if (isLoading) return <h1>Получаем данние...</h1>;

	// if (!Array.isArray(blogPosts))	return <h1>Что-то пошло не так</h1>
	
	if (error) return <h1>{error.massage}</h1>
		
	
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
							selectPost={() => selectPost(post)}
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
