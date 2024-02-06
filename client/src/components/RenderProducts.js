import { useEffect } from "react"
import render from "../utils/render"
import deleteProduct from "../utils/deleteProduct"
import getProducts from "../utils/getProducts"
import newProduct from '../utils/newProduct'
import { useNavigate } from "react-router"
import jwt from 'jsonwebtoken'
import style from '../assets/css/RenderProducts.module.css'

export default function RenderProducts() {

    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if (!token) {
            navigate('/login')
        } else {
            const user = jwt.decode(token)
            console.log(user)

            const display = document.querySelector('#display')
        
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
                            navigate(`/editar?id=${id}`)
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
            <table className={style.table}>
                <thead className={style.thead}>
                    <tr className={style.tr}>
                        <td className={style.td} data-num>Cod.</td>
                        <td className={style.td} data-des>Descrição</td>
                        <td className={style.td} data-siz>Tamanho</td>
                        <td className={style.td} data-act>Ação</td>
                    </tr>
                </thead>
                <tbody id="display" className={style.display}>
                </tbody>
            </table>
        </>
    )
}