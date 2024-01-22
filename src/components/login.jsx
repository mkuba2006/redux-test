import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../store/authentication";

const Login = () => {
    const dispatch = useDispatch()

    const log = (e) =>{
        e.preventDefault();
        dispatch(AuthActions.login())
    }

    return (
        <button onClick={log}>Login</button>
    );
};

export default Login;
