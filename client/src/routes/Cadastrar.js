import addProduct from "../utils/addProduct"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import jwt from 'jsonwebtoken'
import Header from "../components/Header"
import Form from "../components/Form"

export default function Cadastrar() {

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

    const [data, setData] = useState({
        codeInput: '',
        descriptionInput: '',
        sizeInput: ''
    })

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    async function submit(e) {
        e.preventDefault()
        const res = await addProduct(data.codeInput, data.descriptionInput, data.sizeInput)
        console.log(res)

        if (res?.code === '23505') {
            window.alert('produto já cadastrado')
        } 

        if (res?.msg === 'created') {
            window.alert('produto cadastrado com sucesso')
        }
    } 

    return (
        <>
            <Header></Header>
            <Form title='Cadastrar Novo Produto' type='Cadastrar' funcHandle={handle} funcSubmit={submit}></Form>
        </>
    )
}