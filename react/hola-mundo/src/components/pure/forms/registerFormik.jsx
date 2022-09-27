import React from 'react';
import { User } from '../../../models/user.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();


    const initialValues = {
        username: '',
        email: '',
        passsword: '',
        confirm: '',
        role: ROLES.USER
    }
    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Passwords must match!'
                    )
                }).required('You must confirm the password'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                .required('Role is required')
        }
    )

    const submit = (values) => {
        alert('Register user');
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={registerSchema}
            >

                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur
                }) => {
                    return <Form>
                        <label htmlFor="username">Username</label>
                        <Field
                            id='username'
                            name="username"
                            type="text"
                            placeholder='Your username'

                        />
                         {errors.username && touched.username && 
                        (
                            
                           <ErrorMessage  name="username" component='div'/>
                           
                        )}
                        <label htmlFor="email">Email</label>
                        <Field
                            id='email'
                            name="email"
                            type="email"
                            placeholder='Your email'

                        />
                        {errors.email && touched.email && 
                        (
                            
                           <ErrorMessage  name="email" component={'div'}/>
                        )}
                        <label htmlFor="password">Password</label>
                        <Field
                            id='password'
                            name="password"
                            type="password"
                            placeholder='password'
                        />
                        {
                            errors.password && touched.password && 
                            (
                               
                                <ErrorMessage  name="password" component={'div'}/>
                            )
                        }
                        <label htmlFor="confirm">Confirm Password</label>
                        <Field
                            id='confirm'
                            name="confirm"
                            type="confirm"
                            placeholder='Confirm password'
                        />
                        {
                            errors.confirm && touched.confirm && 
                            (
                               
                                <ErrorMessage  name="confirm" component={'div'}/>
                            )
                        }
                        <button type="submit">Submit</button>

                    </Form>
                }}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
