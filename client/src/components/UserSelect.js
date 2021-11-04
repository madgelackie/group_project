
const UserSelect = ({users, onUserSelected}) => {

    const handleChange = function (event) {
        const chosenUser = users[event.target.value];
        onUserSelected(chosenUser);
    }

    const userOptions = users.map((user, index) => {
        return <option value={index} key={index} > {user.name}</option>
    })

    return (
        <>
        <h2 class = "user-page-text">Have you already signed-up? Select your name from the list:</h2>
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose name</option>
            {userOptions}
        </select>
        </>
    )
}

export default UserSelect;