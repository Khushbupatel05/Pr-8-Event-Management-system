import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Login from "../pages/Login"

const ProtectedRoute = ({ Component }) => {
    const navigate = useNavigate()
    let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn")) || false
    if (!loginStatus) {
        return <Login/>
    } 

    return (
            <Component />
    )
}

export default ProtectedRoute
