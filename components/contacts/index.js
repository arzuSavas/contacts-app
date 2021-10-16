import { useState,useEffect } from 'react'
import List from './list'
import Form from './Form'
import "./styles.css"

export default function Contacts() {
    const [contacts,setContacts]=useState([{
        fullname:"Ali SAYGIN",
        phone_number:"05234567891"
    },
    {
        fullname:"ELif YILMAZ",
        phone_number:"05298267412"
    },
    {
        fullname:"Dilara KUŞ",
        phone_number:"05758363749"
    },
]);
   
    useEffect(() => {
       console.log(contacts);
    },[contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}  />
            <Form addContact={setContacts} contacts={contacts} /> 
        </div>
    )
}
