import { useLayoutEffect, useState } from 'react'
import { redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import style from '../assets/css/Header.module.css'

export default function Header() {

    const [isLogged, setIsLogged] = useState(false)

    useLayoutEffect(() => {
        const token = localStorage.getItem('jwt')
        if (!token) {
            setIsLogged(false)
            redirect('/login')
        } else {
            setIsLogged(true)
        }
    }, [])

    return <div className={style.header}>
        <div className={style.headercontent}>
            <h1 className={style.headertitle}>Controle de Produtos</h1>
            <nav>
                <ul className={style.ul}>
                    {!isLogged && <li className={style.li}><Link to={'/'}>Home</Link></li>}
                    {!isLogged && <li className={style.li}><Link to={'/login'}>Login</Link></li>}
                    {isLogged && <li className={style.li}><Link to={'/dashboard'}>Dashboard</Link></li>}
                    {isLogged && <li className={style.li}><Link to={'/cadastrar'}>Cadastrar</Link></li>}
                    {isLogged && <li className={style.li}><Link to={'/logout'}>Logout</Link></li>}
                </ul>
            </nav>
        </div>
    </div>
}