import { useEffect } from "react"
import render from "../utils/render"
import deleteProduct from "../utils/deleteProduct"
import getProducts from "../utils/getProducts"
import newProduct from '../utils/newProduct'
import { useNavigate } from "react-router"
import jwt from 'jsonwebtoken'

export default function RenderProducts() {

    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if (!token) {
            navigate('/login')
        } else {
            const user = jwt.decode(token)
            console.log(user)

            const display = document.querySelector('.display')
        
            getProducts().then(products => {
                render(products, display, newProduct)
            })
    
            display.addEventListener('click', async (e) => {
                e.preventDefault()
            
                const row = e.target.closest('[data-id]')
                const id = row.dataset.id
                
                if (e.target.classList.contains('botao-simples--excluir')) {
                    const res = await deleteProduct(id)
                    console.log(res)
                    
                    if (res.message == 'deleted!') {
                            row.remove()
                            window.alert('Produto deletado com sucesso!')
                        }
                    } 
                    else {
                        if (e.target.classList.contains('botao-simples--editar')) {
                            window.location.href = `../editar?id=${id}`
                        }
                }
            })

            if (!user) {
                localStorage.removeItem('jwt')
                navigate('/login')    
            }
        }
    },[navigate])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Cod.</td>
                        <td>Descrição</td>
                        <td>Tamanho</td>
                        <td>Ação</td>
                    </tr>
                </thead>
                <tbody className="display">
                </tbody>
            </table>
        </>
    )
}