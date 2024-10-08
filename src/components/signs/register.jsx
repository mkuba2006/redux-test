import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/authentication";
import '../../styles/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";


const Register = () => {
    const dispatch = useDispatch()

    const log = (e) =>{
        e.preventDefault();
        dispatch(AuthActions.form())
    }

    return (
        <Button  colorScheme='purple'>
            <Link to="/register">
                Register
            </Link>
        </Button>
    );
};

export default Register;
