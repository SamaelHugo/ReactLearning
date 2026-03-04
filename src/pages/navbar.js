import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            NAVBAR
            <Link to="/"> HOME </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/Contact"> Contact </Link>
            <Link to="/profile"> Profile </Link>
        </div>
    )
}