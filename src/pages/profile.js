import {useNavigate, useParams} from "react-router-dom"


export const Profile = () => {
    let navigate = useNavigate()
    let {username} = useParams();
    return <div>
        <h1>This is the profile page of {username}</h1>
        <button
            onClick={() => { navigate("/")}}
        >
            Return to HOME</button>
    </div>
}