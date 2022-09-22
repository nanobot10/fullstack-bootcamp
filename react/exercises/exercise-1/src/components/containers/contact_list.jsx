import React from 'react';
import { Contact } from '../../models/Contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {
    const defaultContact = new Contact('Dennis', 'Castro', 'c.alejandro17@gmail.com', true);
    return (
        <div>
            <ContactComponent contact={defaultContact}/>
        </div>
    );
};



export default ContactList;
