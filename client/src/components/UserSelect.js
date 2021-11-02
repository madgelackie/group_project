
const UserSelect = ({users}) => {

    const userOptions = users.map((user, index) => {
        return <option value={index} key={index} > {user.name}</option>
    })

    return (
        <>
        <h2>Have you already signed-up? Select your name from the list:</h2>
        <select defaultValue="">
            <option value="">Choose name</option>
            {userOptions}
        </select>
        </>
    )
}

export default UserSelect;