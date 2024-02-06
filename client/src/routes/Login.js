import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router'
import Header from '../components/Header'
import style from '../assets/css/login.module.css'

const url = 'https://api-bfk4.onrender.com'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function loginUser(e) {
        e.preventDefault()

        const response = await fetch(`${url}/login`, {
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
            // redirect('/dashboard')
        } else {
            console.log(data)
        }
    }

    return <div className={style.content}>
        <Header></Header>
        <LoginForm onSubmit={loginUser} setEmail={setEmail} setPassword={setPassword}></LoginForm>
    </div>
}