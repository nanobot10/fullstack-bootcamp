import axios from 'axios';

/**
 * 
 * @param {string} email 
 * @param {string} password 
 */
export const login = (email, password) => {
    const body = {
        email: email,
        password: password
    }
    return axios.post('https://reqres.in/api/login', body);
}

export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users');
}

export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}

export const createUser = (name, job) => {
    const body = {
        name: name,
        job: job
    }
    return axios.post('https://reqres.in/api/users', body);
}

export const updateUserById = (id,name, job) => {
    const body = {
        name: name,
        job: job
    }
    return axios.put(`https://reqres.in/api/users/${id}`, body);
}

export const deleteUserById = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`);
}






