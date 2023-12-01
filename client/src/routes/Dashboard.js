import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import jwt from "jsonwebtoken"
import RenderProducts from "../components/RenderProducts.js"

export default function Dashboard() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if (!token) {
            navigate('/login')
        } else {
            const user = jwt.decode(token)
            console.log(user)
            if (!user) {
                localStorage.removeItem('jwt')
                navigate('/login')    
            }
        }
    },[navigate])

    return (
        <>
            <h1>Dashboard</h1>

            <RenderProducts/>
        </>
    )
}