import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Logout() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if (token) {
            localStorage.removeItem('jwt')
            navigate('/login')
        } else {
            navigate('/login')   
        }
    },[navigate])

    return <>log out</>
}