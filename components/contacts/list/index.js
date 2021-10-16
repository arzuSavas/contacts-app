import {useState} from 'react'

export default function List({contacts}) {
    const [FilterText,SetFilterText]=useState("");

    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
        item[key].toString().toLowerCase().includes(FilterText.toLocaleLowerCase())
        );
    });
    return (
        <div>
            <input 
            placeholder="filter contact" 
            value={FilterText} 
            onChange={(e)=>SetFilterText(e.target.value)} />
            <ul className="list" >
                {
                    filtered.map((contact,i)=>(
                        <li key={i}>
                        <span>{contact.fullname}</span>
                        <hr/>
                        <span className="phoneNumber" >{contact.phone_number}</span>
                        </li>
                    ))
                }
            </ul>
            <p>total contacts {filtered.length} </p>
        </div>
    )
}
