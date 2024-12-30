import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/authentication";
import '../../styles/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import {useColorModeValue } from "@chakra-ui/react";
import theme from "../chakra/theme";

const Register = () => {
    const dispatch = useDispatch()

    const log = (e) =>{
        e.preventDefault();
        dispatch(AuthActions.form())
    }
    const cardBgColor = useColorModeValue(theme.colors.reg.light, theme.colors.reg.dark);
    return (
        <Button color='white' bg={cardBgColor} _hover={{ bg: "gray.700" }} >
            <Link to="/register" >
                Register
            </Link>
        </Button>
    );
};

export default Register;
