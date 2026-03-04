import {useNavigate} from "react-router-dom"


export const Menu = () => {
    let navigate = useNavigate()
    return <div>
        <h1>This is the MENU PAGE</h1>
        <button
            onClick={() => { navigate("/")}}
        >
            Return to HOME</button>
    </div>
}