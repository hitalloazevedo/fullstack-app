import dotenv from 'dotenv'
dotenv.config()
const url = process.env.REACT_APP_API_URL

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