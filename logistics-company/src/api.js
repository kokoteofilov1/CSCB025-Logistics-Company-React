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
			}
		})
		.then((response) => {
			console.log(response.data)
			let token = response.data.accessToken;
			localStorage.setItem('accessToken', token);
			localStorage.setItem('userEmail', response.data.email);
			localStorage.setItem('username', response.data.username);
			localStorage.setItem('roles', response.data.roles);
			localStorage.setItem('id', response.data.id);
			axios.defaults.headers.common['Authorization'] = localStorage.getItem('acessToken');
			console.log(localStorage.getItem('accessToken'));
		});
};

export const addOffice = (body) => {
	return axios.post(`${domain}/office`, body, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
		}
	});
};

export const addEmployee = (body) => {
	return axios.post(`${domain}/user`, body, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
		}
	});
};

export const editUser = (body) => {
	return axios.put(`${domain}/user/${localStorage.getItem('id')}`, body, {
		headers:{
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
		}
	});
};