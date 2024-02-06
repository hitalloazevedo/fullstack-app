import { useNavigate } from "react-router"
import Header from "../components/Header"

export default function Home() {
    const navigate = useNavigate()
    return(
        <>  
            <Header></Header>
            <h1>Home Page</h1>
        </>
    )
}