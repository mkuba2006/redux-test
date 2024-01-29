import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../store/authentication";
import '../styles/header.css'



const Logout = () => {
    const dispatch = useDispatch()

    const log = (e) =>{
        e.preventDefault();
        dispatch(AuthActions.logout())
    }

    return (
        <button onClick={log} className="btn btn-outline-danger fs-5">logout</button>
    );
};

export default Logout;
