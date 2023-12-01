const deleteProduct = async (id) => {
    const response = await fetch(`http://localhost:3333/deletar/${id}`, {
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