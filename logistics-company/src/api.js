import axios from 'axios';

export const signUp = (body) => {
	return axios.post('/api/SignUp', body, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};