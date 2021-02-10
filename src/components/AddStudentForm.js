import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function AddStudentForm({onAdd}) {

    const [name, setName] = useState("some name");
    const [uni, setUni] = useState("some uni");

    return <form className={"formidabel"} onSubmit={event => {
        event.preventDefault();
        onAdd({id: uuidv4(), name: name, university: uni})
        setName("some name");
        setUni("some uni");
    }}>
        Please enter "Name" and "University" in order to add a human to the list! <br/><br/>
        <label>
            Name:
            <input value={name} onChange={event => setName(event.target.value)}/>
        </label>
        <label>
            Uni:
            <input value={uni} onChange={event => setUni(event.target.value)}/>
        </label>
        <button> Add</button>
    </form>

}


export default AddStudentForm
