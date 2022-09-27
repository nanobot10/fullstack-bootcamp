import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';

const TaskFormik = () => {

    const validationSchema = yup.object().shape(
        {
            name: yup.string()
                .required('Name is required'),
            description: yup.string()
                .required('Description is required'),
            level: yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT], 'Invalid level')
                .required('Level is required')
        }
    )

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    return (
        <div>
            <Formik
                initialValues= {initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
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
                        <label htmlFor="name">Name</label>
                        <Field
                            id='name'
                            name="name"
                            type="text"
                            placeholder='Task name'
                            

                        />
                         {errors.name && touched.name && 
                        (
                            
                           <ErrorMessage  name="name" component='div'/>
                           
                        )}
                        <label htmlFor="description">Description</label>
                        <Field
                            id='description'
                            name="description"
                            type="text"
                            placeholder='Task description'

                        />
                        {errors.description && touched.description && 
                        (
                            
                           <ErrorMessage  name="description" component={'div'}/>
                        )}

                        <label htmlFor="level">Level</label>
                        <Field
                            id='level'
                            name="level"
                            as="select"
                            placeholder='Task description'

                        >
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        {errors.level && touched.level && 
                        (
                            
                           <ErrorMessage  name="level" component={'div'}/>
                        )}
                        
                        <button type="submit">Submit</button>

                    </Form>
                }}

            </Formik>
        </div>
    );
}

export default TaskFormik;
