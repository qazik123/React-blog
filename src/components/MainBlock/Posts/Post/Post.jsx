import React from 'react'
import './Post.css'
import { FaHeart, FaEdit } from 'react-icons/fa'
import { MdDeleteForever } from "react-icons/md";
import imagePlaceholder from '../../../../images/placeholder.png'

export default function Post({
	title,
	description,
	liked = false,
	image = imagePlaceholder,
	likePost,
	deletePost,
	selectPost,
}) {
	const [isLiked, setIsLiked] = React.useState(liked)
	const customFilling = liked ? 'red' : 'black'


	const finalDescription = (
		<p>
			{description.length > 100 ? (
				<>
					{description.slice(0, 101)}...
					<a href='/'>Подробнее</a>
				</>
			) : (
				description
			)}
		</p>
	)

	return (
		<div className='post'>
			<img src={image} alt='' />
			<h2>{title}</h2>
			{finalDescription}
			<div className='actions'>
				<button onClick={likePost} className='buttonLike'>
					<FaHeart fill={customFilling} />
				</button>
				<button onClick={deletePost} className='buttonDelete'>
					<MdDeleteForever />
				</button>
				<button onClick={selectPost} className='buttonSelect'>
					<FaEdit />
				</button>
			</div>
		</div>
	)
}
