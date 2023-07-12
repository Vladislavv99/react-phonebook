

const ContactList = ({contacts, onRemoveContact}) => {
    return <div>
        <ul>
            {contacts.length === 0 ? <h4>Contact list is empty</h4> : contacts.map(contact => <li key={contact.id}>{contact.name}: {contact.number }
            <button type="button" onClick={()=>onRemoveContact(contact.id)}>Delete</button></li>)}
            
        </ul>
    </div>
}

export default ContactList;