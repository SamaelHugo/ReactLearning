import {ChangeProfile} from "../components/changeProfile";
import {useContext} from "react";
import {AppContext} from "../App";

export const Profile = () => {
    const {username} = useContext(AppContext)

    return (
    <div>
        <h1>This is the profile page of {username}
            <ChangeProfile /></h1>
    </div>
    )
}