const baseURL = "http://localhost:5000/api/users"

export const postUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getUsersbyID = (user) => {
    return fetch(baseURL + user._id)
        .then(res => {res.json()})
}

export const updateUser = (user) => {
    return fetch(baseURL + user._id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
}



