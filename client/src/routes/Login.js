import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function loginUser(e) {
        e.preventDefault()

        const response = await fetch('http://localhost:3333/login', {
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('jwt', data.jwt)
            navigate('/dashboard')
        } else {
            console.log(data)
        }
    }

    return <div>
        <LoginForm onSubmit={loginUser} setEmail={setEmail} setPassword={setPassword}></LoginForm>
    </div>
}