import styles from './ContactList.module.css';
import React from 'react';
// Імпортуємо хук
import { useSelector } from 'react-redux';

const ContactList = ({ contacts, onDeleteContact }) => {
  const contact = useSelector(state => state.contacts.status);
  console.log(contact);
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          {contact.name}: {contact.number}
          <button
            onClick={() => onDeleteContact(contact.id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
