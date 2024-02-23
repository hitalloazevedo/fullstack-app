const url = process.env.REACT_APP_API_URL

const editProduct = async (cod, description, size, id) => {
    const response = await fetch(`${url}/editar/${id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                    'cookies': localStorage.getItem('jwt')},
        body: JSON.stringify({
            cod,
            description,
            size
        }),
        credentials: 'include'
    })

    const data = await response.json()
    return data
}

export default editProduct