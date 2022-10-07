import React, {useState, useEffect} from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, reqResLogin } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages, setPages] = useState(2);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All users', response);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
            }).catch((error) => {
                console.log(error);
            }).finally(() => console.log('Ended obtaining users'));
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All users', response);
                setUsers(response.data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => console.log('Ended obtaining users'));
    }

    
    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('All users', response);
                setSelectedUser(response.data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => console.log('Ended obtaining users'));
    }

    
    const login = () => {
        console.log('Login button');
        reqResLogin('eve.holt@reqres.in', 'cityslicka')
        .then((response) => {
            console.log('All users', response.token);
            sessionStorage.setItem('token', response.token);
        }).catch((error) => {
            alert('Error while login user', error);
        }).finally(() => console.log('Ended obtaining users'));
    }
    return (
        <div>
            <button onClick={login}>Login</button>
            <h2>Users</h2>
            {
                users.map(user => (
                    <p key={user.id} onClick={() => obtainUserDetails(user.id)}>
                        {user.first_name} {user.last_name}
                    </p>
                ))
            }
            <p>Showing {usersPerPage} users of {totalUsers} in total </p>
            <button  onClick={() => obtainPagedUsers(1)}>1</button>
            <button  onClick={() => obtainPagedUsers(2)}>2</button>
            <div>
                
                {
                    selectedUser
                    ?
                    (
                        
                        <div>  
                            <h3>User Details</h3>  
                            <p>Name: {selectedUser.first_name} </p>
                            <p>Lastname: {selectedUser.last_name} </p>
                            <p>Email: {selectedUser.email} </p>
                            <img src={selectedUser.avatar} style={{height:'50px', width: '50px'}} alt='user-avatar'/>
                        </div>
                    )
                    :
                    <h6>Please select an user to show their details</h6>


                }
            </div>
        </div>
    );
}

export default FetchExample;
