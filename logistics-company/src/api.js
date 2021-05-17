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
	return axios.post(`${domain}/auth/signin`, body, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
