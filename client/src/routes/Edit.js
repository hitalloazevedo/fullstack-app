import { useEffect, useState } from "react"
import loadInputContent from "../utils/loadInputContent"
import editProduct from "../utils/editProduct"
import LoadData from "../utils/loadData"
import { useNavigate } from "react-router"
import jwt from 'jsonwebtoken'
import Header from "../components/Header"
import Form from "../components/Form"

export default function Edit() {
    const url = new URL(window.location.href)
    const id = url.searchParams.get('id')

    const navigate = useNavigate()
    const [itemId, setItemId] = useState(null)

    useEffect(() => {
        setItemId(id)
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

            const codField = document.querySelector('#codeInput')
            const descriptionField = document.querySelector('#descriptionInput')
            const sizeField = document.querySelector('#sizeInput')
            loadInputContent(codField, descriptionField, sizeField, itemId)

            LoadData(id).then(res => {
                const resData = {
                            codeInput: res.cod,
                            descriptionInput: res.description,
                            sizeInput: res.size
                }
                setData(resData)
            })
        }
    }, [navigate, itemId])

    const [data, setData] = useState({
        codeInput: '',
        descriptionInput: '',
        sizeInput: ''
    })

    function submit(e, id) {
        e.preventDefault()
        editProduct(data.codeInput, data.descriptionInput, data.sizeInput, itemId)
    }

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    return (
        <>  
            <Header></Header>
            <Form title='Editar Produto' type='Editar' funcHandle={handle} funcSubmit={submit}></Form>
        </>
    )
}