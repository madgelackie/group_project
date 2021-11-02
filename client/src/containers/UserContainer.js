import {useState} from "react"


const UserContainer = () => {
    
    const [formData, setFormData] = useState({})

    const baseURL = "http://localhost:5000/api/users"

    const postUser = (payload) => {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Cotent-Type': 'application/json'}
        })
        .then(res => res.json())
    }

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postUser(formData)
        }
    

    return (
        <form onSubmit={onSubmit}>
            <label>What is your name?</label>
            <input onChange={onChange} type="text" />
            <label>How old are you?</label>
            <input onChange={onChange} type="text" />
            <button type="sumbit" value="Submit">Sumbit</button>
        </form>
    )
}

export default UserContainer;
