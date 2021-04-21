import axios from 'axios';

export const signUp = (body) => {
	return axios.post('/api/SignUp', body, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const signIn = (body) => {
    return axios.post("/api/signin", body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};