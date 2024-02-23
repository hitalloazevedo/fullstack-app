import RenderProducts from "../components/RenderProducts.js"
import Header from "../components/Header.js"
import '../assets/css/Dashboard.css'

export default function Dashboard() {
    return (
        <>
            <Header></Header>
            <div class="main">
                <h1 className="title">Dashboard</h1>
                <RenderProducts/>
            </div>
        </>
    )
}