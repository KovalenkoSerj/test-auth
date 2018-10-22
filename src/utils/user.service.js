import { authHeader } from './authHeader'

export const user_register = user => {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify(user)
	};
	return fetch('/users/register', requestOptions).then(handleResponse)
}

export const user_login = (username, password) => {
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({ username, password })
	}
	return fetch('/users/authenticate', requestOptions ).then(user => {
		if(user && user.token) {
			localStorage.setItem('user', JSON.stringify(user))
		}
		return user;
	})
}

export const get_all_users = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader()
	};
	return fetch('/users', requestOptions).then(handleResponse)
}

const handleResponse = response => {
	if(!response.ok) {
		return Promise.reject(response.statusText)
	}
	return response.json()
}