import React from 'react';
import { login, getAllUsers, getAllPagedUsers, getUserById, createUser, updateUserById, deleteUserById } from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
)

const AxiosCRUDExample = () => {

    const history = useHistory();
    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                if(response.data.token) {
                    alert(JSON.stringify(response.data))
                    sessionStorage.setItem('token', response.data.token);
                } else{
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }
                
            }).catch((error) => {
                alert(`Something went wrong ${error}`);
                sessionStorage.removeItem('token');
            }).finally(() => console.log('Login done'))
    }

    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            }).catch((error) => {
                alert(`Something went wrong ${error}`);
            }).finally(() => console.log('obtainAllUsers done')) 
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            }).catch((error) => {
                alert(`Something went wrong ${error}`);
            }).finally(() => console.log('obtainAllPagedUsers done')) 
    }

    const obtainUserById = (id) => {
        getUserById(id)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            }).catch((error) => {
                alert(`Something went wrong ${error}`);
            }).finally(() => console.log('obtainUserById done'))  
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
        .then((response) => {
            
           if(response.data && response.status === 201) {
                alert('User created')
           } else {
                alert('User not created')
           }
        }).catch((error) => {
            alert(`Something went wrong ${error}`);
        })
    }

    const updateNewUser = (id, name, job) => {
        updateUserById(id, name, job)
        .then((response) => {
            
           if(response.data && response.status === 200) {
                alert('User updated')
           } else {
                alert('User not updated')
           }
        }).catch((error) => {
            alert(`Something went wrong ${error}`);
        })
    }

    const deleteUser = (id) => {
        deleteUserById(id)
            .then((response) => {
                if(response.status === 204) {
                    alert('User deleted succesfully')
                } else {
                    alert('User not deleted')
                }
            }).catch((error) => {
                alert(`Something went wrong ${error}`);
            }).finally(() => console.log('obtainUserById done'))  
    }



    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={authUser}
            >

                {/** we obtain propos from Formik */}

                {
                    ({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    }) => {

                        return (
                            <Form>
                                <label htmlFor="email">Email</label>
                                <Field
                                    id='email'
                                    name="email"
                                    type="email"
                                    placeholder='example@gmail.com'

                                />
                                {
                                    errors.email && touched.email && 
                                    (
                                      
                                        <div>
                                            <ErrorMessage  name="email" />
                                        </div>
                                    )
                                }
                                <label htmlFor="password"></label>
                                <Field
                                    id='password'
                                    name="password"
                                    type="password"
                                    placeholder='password'
                                />
                                {
                                    errors.password && touched.password && 
                                    (
                                      
                                        <div>
                                            <ErrorMessage  name="password" />
                                        </div>
                                    )
                                }
                                <button type="submit">Submit</button>
                                {isSubmitting ? (<p>Login your credentials ...</p>) : null}
                            </Form>
                        )
                    }
                }

            </Formik>
            <div>
                <button onClick={obtainAllUsers}>Get All Users with axios</button>
                <button onClick={() => obtainAllPagedUsers(1)}>Get All Paged Users with axios</button>
                <button onClick={() => obtainUserById(1)}>Get user by id</button>
                <button onClick={() => createNewUser('Dennis', 'Developer')}>Create User</button>
                <button onClick={() => updateNewUser(1, 'Dennis', 'Developer')}>UPdate User</button>
                <button onClick={() => deleteUser(1)}>Delete user by id</button>

            </div>
        </div>
    );
}

export default AxiosCRUDExample;
