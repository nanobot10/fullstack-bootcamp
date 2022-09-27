import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
)

const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', JSON.stringify(values));
                }}
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
        </div>
    );
}

export default LoginFormik;
