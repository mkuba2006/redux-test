import Login from "./login";
import Logout from "./logout";
import '../styles/header.css'; 
import { useSelector } from "react-redux";

const Header = () => {
    const isAuth = useSelector(state => state.auth.isLogged);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom-padding">
            <div className="container-fluid d-flex justify-content-around">
                <a className="navbar-brand">Redux Project</a>
                <div className="navbar-nav">
                    {isAuth == "false" && <div><Login /></div>}
                    {isAuth == "true" && <div><Logout /></div>}
                </div>
            </div>
        </nav>
    );
};

export default Header;
