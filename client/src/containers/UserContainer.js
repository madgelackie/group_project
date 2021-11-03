import {useState, useEffect} from "react"
import { getUsers, postUser } from "../services/UserService"
import UserSelect from "../components/UserSelect";
import {Link} from "react-router-dom";


const UserContainer = ({setCurrentUser, currentUser}) => {
    
    const [users, setUsers] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [score, setScore] = useState(null);
    const [spaceClass, setSpaceClass] = useState(null)

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
            score: 0,
            spaceClass: null
        });
        setName("");
        setAge("");
        }
    
        const onUserSelected = (user) => {
            setCurrentUser(user)
        }

    return (
        <div>
        <h2>Are you new to Space Camp? Sign-up here then click on your name below:</h2>
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
        {users ? <UserSelect users={users} onUserSelected={onUserSelected}/> :null} 
        <Link id="link" to="/">Planets</Link>
        <Link id="link" to="/quiz">Quiz</Link>     
        </div>
        
    )
}

export default UserContainer;
