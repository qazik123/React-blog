import React from 'react'
import PostsHeader from './PostsHeader/PostsHeader'
import Post from './Post/Post'
import './Posts.css'
import postImage from '../../../images/postImage.jpg'

export default function Posts() {


	return (
		<div className='postsWrapper'>
			<PostsHeader />
			<section className='posts'>
				<Post
					title='Post 1'
					description='В лингвистике термин «текст» используется в широком значении, включая и
                                образцы устной речи.В лингвистике термин «текст» используется в широком
                                значении, включая и образцы устной речи.'
					liked
					image={postImage}
				/>
				<Post
					title='Post 2'
					description='В лингвистике термин «текст» используется в широком значении, включая и
                                образцы устной речи.В лингвистике термин «текст» используется в широком
                                значении, включая и образцы устной речи.'
					liked
					image={postImage}
				/>
				<Post
					title='Post 3'
					description='В лингвистике термин «текст» используется в широком значении, включая и
                                образцы устной речи.В лингвистике термин «текст» используется в широком
                                значении, включая и образцы устной речи.'
					liked
					image={postImage}
				/>
				<Post
					title='Post 4'
					description='В лингвистике термин «текст» используется в широком значении, включая и
                                образцы устной речи.В лингвистике термин «текст» используется в широком
                                значении, включая и образцы устной речи.'
					liked
					image={postImage}
				/>
				<Post
					title='Post 5'
					description='В лингвистике термин «текст» используется в широком значении, включая и
                                образцы устной речи.'
					liked
					// image={postImage}
				/>
				<Post
					title='Post 6'
					description='В лингвистике термин «текст» используется в широком значении, включая и
                                образцы устной речи.В лингвистике термин «текст» используется в широком
                                значении, включая и образцы устной речи.'
					liked
					image={postImage}
				/>
			</section>
		</div>
	)
}
