import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../store/authentication";

const Logout = () => {
    const dispatch = useDispatch()

    const log = (e) =>{
        e.preventDefault();
        dispatch(AuthActions.logout())
    }

    return (
        <button onClick={log}>logout</button>
    );
};

export default Logout;
