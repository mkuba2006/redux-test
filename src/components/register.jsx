import { useDispatch } from "react-redux";
import { AuthActions } from "../store/authentication";
import '../styles/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@chakra-ui/react'

const Register = () => {
    const dispatch = useDispatch()

    const log = (e) =>{
        e.preventDefault();
        dispatch(AuthActions.form())
    }

    return (
        <Button onClick={log} colorScheme='linkedin'>Register</Button>
    );
};

export default Register;
