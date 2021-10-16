import {useState,useEffect} from 'react'
const initialFormValues={fullname:"",phone_number:""}

export default function Form({addContact,contacts}){
    const[form,setForm]=useState(initialFormValues);
    
    useEffect(()=>{
        setForm(initialFormValues);
    },[contacts]);

    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    const onSubmit=(e)=>{
        e.preventDefault();
        if(form.fullname === '' || form.phone_number === ''){

            return false;
        }
        addContact([...contacts,form])
        console.log(form);
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <hr/>
                <h2>Add Contact</h2>
             <input 
             name="fullname" 
             placeholder="Full Name"
             onChange={onChangeInput}
             value={form.fullname} >
                 </input>   
            </div>
            <div>
                <input 
                name="phone_number" 
                placeholder="Phone Number"
                onChange={onChangeInput} 
                value={form.phone_number} >
                    </input> 
            </div>
            <div className="btn" >
                <button>Add</button>
            </div>
           
        </form>
    )
}
