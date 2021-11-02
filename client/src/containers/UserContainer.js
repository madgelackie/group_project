import {useState, useEffect} from "react"
import { getUsers, postUser } from "../services/UserService"
import UserSelect from "../components/UserSelect";


const UserContainer = () => {
    
    const [users, setUsers] = useState(null);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (event) => setName(event.target.value)
    const handleAgeChange = (event) => setAge(event.target.value)
    
    useEffect(() => {
        if (users === !null);
        getUsers().then((allUsers) => {
            setUsers(allUsers)
        }) 
    }, null);

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
            <input 
            onChange={handleNameChange} 
            id="name"  
            value={name}
            required
            type="text" />
        </div>
        <div>    
            <label>How old are you?</label>
            <input
            onChange={handleAgeChange} 
            id="age"  
            type="text"
            value={age}
            required
            />
        </div>
        <div>
            <button type="sumbit" value="Submit">Submit</button>
        </div>
        </form>
        {users ? <UserSelect users={users}/> :null}      
        </div>
    )
}

export default UserContainer;
