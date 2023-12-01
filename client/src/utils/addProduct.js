const url = 'https://api-bfk4.onrender.com'

const addProduct = async (id, description, size) => {
    const response = await fetch(`${url}/cadastrar`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                    'cookies': localStorage.getItem('jwt')},
        body: JSON.stringify({
            id,
            description,
            size
        }),
        credentials: 'include'
    })

    const data = await response.json()
    return data
}

export default addProduct