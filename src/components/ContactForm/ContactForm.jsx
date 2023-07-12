import { useState } from "react";


const ContactForm = ({onAddContact}) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
        
        const { name, value } = e.target
        
        switch (name) {
            case "name":
                setName(value)
                break;
            case "number":
                setNumber(value)
            default:
                break;
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onAddContact({name, number})

        setName('');
        setNumber('');
    }
    
 
    return <div>
        <form>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit} >Add contact</button>
      </form>
    </div>
}

export default ContactForm;