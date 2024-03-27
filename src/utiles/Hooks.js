import React, {useEffect} from 'react'

export const useFetchPosts = url => {
	// ИЗМЕНЕНИЕ СОСТОЯНИЯ ПОСТА
	const [blogPosts, setBlogPosts] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)
	const [error, setError] = React.useState(null)

	useEffect(() => {
		setIsLoading(true)
		// ПОЛУЧЕНИЕ ДАННИХ С API

		fetch(url)
			.then(response => response.json())
			.then(postsFromServer => {
				setBlogPosts(postsFromServer)
				setIsLoading(false)
			})
			.catch(error => {
				console.log(error)
				setIsLoading(false)
				setError(error)
			})
	}, [url])

	return { blogPosts, setBlogPosts, isLoading, error }
}
