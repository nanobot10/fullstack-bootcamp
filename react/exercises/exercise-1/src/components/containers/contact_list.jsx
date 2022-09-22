import React from 'react';
import { useState } from 'react';
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {
    const defaultContact = new Contact('Dennis', 'Castro', 'c.alejandro17@gmail.com', true);
    const defaultContact1 = new Contact('Manuel', 'Guzmán', 'c.alejandro17@gmail.com', false);
    const defaultContact2= new Contact('Germán', 'Rodriguez', 'c.alejandro17@gmail.com', true);

    const [contacts, setContacts] = useState([defaultContact, defaultContact1, defaultContact2]);


    const updateContact = (contact) => {
        const index = contacts.indexOf(contact);
        const temp = [...contacts];
        temp[index].connected = !temp[index].connected;
        setContacts(temp);
    }

    const deleteContact = (contact) => {
        const index = contacts.indexOf(contact);
        const temp = [...contacts];
        temp.splice(index, 1);
        setContacts(temp);
    }

    const addContact = (contact) => {
        const temp = [...contacts];
        temp.push(contact);
        setContacts(temp);
    }

    return (
        <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
            <div className='card'>
                <div className='card-header'>
                    <h5>Lista de Contactos</h5>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Connected</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((c, index) => <ContactComponent key={index} contact={c} updateContact={updateContact} deleteContact={deleteContact}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <ContactForm addContact={addContact}/>
            
        </div>
    );
};



export default ContactList;
