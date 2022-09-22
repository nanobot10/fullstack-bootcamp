import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';


const ContactComponent = ({ contact }) => {

    return (
        <div>
            <ul>
                <li>Name: <small>{contact.name}</small> </li>
                <li>Lastname: <small>{contact.lastname}</small> </li>
                <li>Email: <small>{contact.email}</small></li>
                <li>Connected: <small>{contact.connected ? 'Contacto En Línea' : 'Contacto No Disponible'}</small> </li>
            </ul>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
