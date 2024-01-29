import { useDispatch } from "react-redux";
import { AuthActions } from "../store/authentication";
import '../styles/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    const dispatch = useDispatch()

    const log = (e) =>{
        e.preventDefault();
        dispatch(AuthActions.form())
    }

    return (
        <button onClick={log} className="btn btn-outline-primary fs-5 ">Login</button>
    );
};

export default Login;
