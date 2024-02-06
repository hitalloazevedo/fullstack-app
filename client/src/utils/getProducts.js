import { URL } from "../api-url"
const url = URL

async function getProducts() {
    const res = await fetch(`${url}/produtos`, {
        headers: {
            cookies: localStorage.getItem('jwt'),
        },
        credentials: 'include'
        })

    const body = await res.json()
    return body
}

export default getProducts