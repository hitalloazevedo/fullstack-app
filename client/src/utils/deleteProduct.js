const url = process.env.REACT_APP_API_URL

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