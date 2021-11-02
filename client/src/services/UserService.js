const baseURL = "http://localhost:5000/api/users"



export const postUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Cotent-Type': 'application/json'}
    })
    .then(res => res.json())
}