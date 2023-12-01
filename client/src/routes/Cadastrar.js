import addProduct from "../utils/addProduct"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import jwt from 'jsonwebtoken'


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
            <form id="new-item-form" onSubmit={async (e) => await submit(e)}>
                <h2>Cadastrar Produto</h2>
                <div className="input-field">
                    <label htmlFor="codeInput">Código</label>
                    <input onChange={(e) => handle(e)} type="number" id="codeInput"/>
                    <label htmlFor="descriptionInput">Descrição</label>
                    <input onChange={(e) => handle(e)} type="text" id="descriptionInput"/>
                    <label htmlFor="sizeInput">Tamanho</label>
                    <input onChange={(e) => handle(e)} type="text" id="sizeInput"/>
                </div>
                <div className="button-field">
                    <input type="submit" id="btnSend" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}