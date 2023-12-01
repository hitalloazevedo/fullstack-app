const url = 'https://api-bfk4.onrender.com'

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