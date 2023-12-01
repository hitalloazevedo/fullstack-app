import { useEffect, useState } from "react"
import loadInputContent from "../utils/loadInputContent"
import editProduct from "../utils/editProduct"
import LoadData from "../utils/loadData"
import { useNavigate } from "react-router"
import jwt from 'jsonwebtoken'

export default function Edit() {
    const url = new URL(window.location.href)
    const id = url.searchParams.get('id')
    
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

            window.addEventListener('load', async () => {
                const codField = document.querySelector('#codeInput')
                const descriptionField = document.querySelector('#descriptionInput')
                const sizeField = document.querySelector('#sizeInput')
                loadInputContent(codField, descriptionField, sizeField, id)

                const res = await LoadData(id)
                console.log(res)

                const resData = {
                            codeInput: res.cod,
                            descriptionInput: res.description,
                            sizeInput: res.size
                }

                setData(resData)
            })
        }
    }, [navigate, id])

    const [data, setData] = useState({
        codeInput: '',
        descriptionInput: '',
        sizeInput: ''
    })

    function submit(e, id) {
        e.preventDefault()
        editProduct(data.codeInput, data.descriptionInput, data.sizeInput, id)
    }

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    // window.addEventListener('load', async () => {
    //     const res = await LoadData(id)
    //     const resData = {
    //             codeInput: res.cod,
    //             descriptionInput: res.description,
    //             sizeInput: res.size
    //     }
    //     setData(resData)
    // })

    return (
        <>
            <form id="new-item-form" onSubmit={async (e) => await submit(e, id)}>
                <h2>Editar Produto</h2>
                <div className="input-field">
                    <label htmlFor="codeInput">Código</label>
                    <input onChange={(e) => handle(e)} type="number" id="codeInput"/>
                    <label htmlFor="descriptionInput">Descrição</label>
                    <input onChange={(e) => handle(e)} type="text" id="descriptionInput"/>
                    <label htmlFor="sizeInput">Tamanho</label>
                    <input onChange={(e) => handle(e)} type="text" id="sizeInput"/>
                </div>
                <div className="button-field">
                    <input type="submit" id="btnSend" value="Editar"/>
                </div>
            </form>
        </>
    )
}