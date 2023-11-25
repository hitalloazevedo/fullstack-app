import { useEffect } from "react"

export default function RenderProducts() {

    useEffect(() => {
        async function getProducts() {
            const res = await fetch('http://localhost:3333/produtos', {
                headers: {
                    cookies: localStorage.getItem('jwt'),
                },
                credentials: 'include'
                })
        
            const body = await res.json()
        
            console.log(body)
            body.forEach(element => {
                return <li>element</li>
            });
        }

        getProducts()
    },[])

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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>parafuso</td>
                        <td>10mm</td>
                        <td><a href="#">Editar</a><a href="#">Excluir</a></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}