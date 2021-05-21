import axios from 'axios';

let domain = 'http://localhost:8080/api';

export const signUp = (body) => {
	return axios.post(`${domain}/auth/signup`, body, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const signIn = (body) => {
	return axios
		.post(`${domain}/auth/signin`, body, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((response) => {
			let token = response.data.accessToken;
			localStorage.setItem('accessToken', 'Bearer ' + token);
			axios.defaults.headers.common['Authorization'] = localStorage.getItem('acessToken');
			console.log(localStorage.getItem('accessToken'));
		});
};

export const addOffice = (body) => {
	return axios.post(`${domain}/office`, body, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': localStorage.getItem('accessToken'),
		},
	});
};
