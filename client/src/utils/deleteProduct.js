import { URL } from "../api-url"
const url = URL

const deleteProduct = async (id) => {
    const response = await fetch(`${url}/deletar/${id}`, {
        method: 'DELETE',
        headers: {
            cookies: localStorage.getItem('jwt'),
        },
        credentials: 'include'
        })
    const data = await response.json()
    return data
}

export default deleteProduct