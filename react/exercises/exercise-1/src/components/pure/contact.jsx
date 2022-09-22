import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';


const ContactComponent = ({ contact, updateContact, deleteContact }) => {

    return (
       <tr>
            <td>{contact.name}</td>
            <td>{contact.lastname}</td>
            <td>{contact.email}</td>
            <td>{contact.connected ? 'IN LINE' : 'DISCONNECTED'}</td>
            <td>
                {
                    contact.connected
                    ?
                    <i className="fa-solid fa-toggle-on task-action" style={{color: 'green'}} onClick={() => updateContact(contact)}></i>
                    :
                    <i className="fa-solid fa-toggle-off task-action" style={{color: 'gray'}} onClick={() => updateContact(contact)}></i>
                }
                <i className="fa-solid fa-trash task-action ms-2" style={{color: 'red'}} onClick={() => deleteContact(contact)}></i>
            </td>
       </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    updateContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
};


export default ContactComponent;
