import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/Contact.class';


const ContactForm = ({addContact}) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');

    const onSubmit = (e) => {
        e.preventDefault();
        const newContact = new Contact(nameRef.current.value, lastnameRef.current.value, emailRef.current.value, false);
        addContact(newContact);
    }

    return (
        <div className='col-3'>
            <h5>Agregar contacto</h5>
            <form onSubmit={onSubmit}>
                <input ref={nameRef} type="text"  className='form-control' placeholder='name'/>
                <input ref={lastnameRef} type="text"  className='form-control' placeholder='lastname'/>
                <input ref={emailRef} type="text"  className='form-control' placeholder='email'/>
                <button className='btn btn-success' onClick={onSubmit}>Add</button>
            </form>
        </div>
    );
};


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
};


export default ContactForm;
