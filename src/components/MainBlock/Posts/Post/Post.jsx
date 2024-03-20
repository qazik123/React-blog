import React from 'react'
import './Post.css'
import { FaHeart } from 'react-icons/fa'
import imagePlaceholder from '../../../../images/placeholder.png'

export default function Post({ title, description, liked = false, image = imagePlaceholder }) {
    const [isLiked, setIsLiked] = React.useState(liked)
    const customFilling = isLiked ? 'red' : 'black';

    const like = () => {
        setIsLiked(!isLiked);
    }

    const finalDescription = (
        <p>
            {
                description.length > 100 ? (
                    <>{description.slice(0, 101)}... 
                    <a href='/'>Подробнее</a>
                    </>
                ) : description
                    
            }
        </p>
        
    )

	return (
		<div className='post'>
			<img src={image} alt='' />
			<h2>{title}</h2>
			{finalDescription}
			{/* TODO: пофиксить смену цвета лайка при нажатии */}
			<button onClick={like} className='buttonLike'>
				<FaHeart fill={customFilling} />
			</button>
		</div>
	)
}
