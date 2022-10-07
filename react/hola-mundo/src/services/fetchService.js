export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    return response.json();
}


export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    return response.json();
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    return response.json();
}

export const reqResLogin = async(email, password) => {
    let body = {
            'email': email,
            'password': password
        }

    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST', 
        mode: 'cors',
        body: JSON.stringify(body)
    });

    console.log(response);

    return response.json();
}