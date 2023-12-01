const url = 'https://api-bfk4.onrender.com'

async function getProducts() {
    const res = await fetch(`${url}/produtos`, {
        headers: {
            cookies: localStorage.getItem('jwt'),
        },
        credentials: 'include'
        })

    const body = await res.json()
    console.log(body)
    return body
}

export default getProducts