async function getProducts() {
    const res = await fetch('http://localhost:3333/produtos', {
        headers: {
            cookies: localStorage.getItem('jwt'),
        },
        credentials: 'include'
        })

    const body = await res.json()
    return body
}

export default getProducts