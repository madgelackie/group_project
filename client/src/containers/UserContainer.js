import {useState} from "react"
import { postUser } from "../services/UserService"


const UserContainer = () => {
    
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (event) => setName(event.target.value)
    const handleAgeChange = (event) => setAge(event.target.value)
    
    const onSubmit = (event) => {
        event.preventDefault();
        postUser({
            name: name,
            age: age,
            ranking: null
        });
        setName("");
        setAge("");
        }
    
    return (
        <div>
        <h2>Are you new to Space Camp? Sign-up here:</h2>
        <form onSubmit={onSubmit} id="user-form">
        <div>
            <label >What is your name?</label>
            <input onChange={handleNameChange} id="name" type="text" />
        </div>
        <div>    
            <label>How old are you?</label>
            <input onChange={handleAgeChange} id="age" type="text" />
        </div>
        <div>
            <button type="sumbit" value="Submit">Submit</button>
        </div>
        </form>
        </div>
    )
}

export default UserContainer;
