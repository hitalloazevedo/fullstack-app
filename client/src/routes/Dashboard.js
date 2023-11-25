import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import jwt from "jsonwebtoken"
import RenderProducts from "../components/RenderProducts.js"

export default function Dashboard() {

    const navigate = useNavigate()
    const [data, setData] = useState({})

    async function populateQuote() {
        const res = await fetch('http://localhost:3333/produtos', {
            headers: {
                cookies: localStorage.getItem('jwt'),
            },
            credentials: 'include'
        })

        const data = await res.json()
        setData(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        console.log(token)
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('jwt')
                navigate('/login')
            } else {
                // populateQuote()
            }
        } else {
            navigate('/login')
        }
    },[navigate])



    return (
        <>
            <h1>Dashboard</h1>

            <RenderProducts/>
        </>
    )
}