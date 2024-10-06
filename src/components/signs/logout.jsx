import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/authentication";
import '../../styles/header.css'
import { Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Logout = ({theme}) => {
    const dispatch = useDispatch()
    const color = useColorModeValue(theme.colors.formtext.light, theme.colors.formtext.dark);
    const bg = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    const log = (e) =>{
        e.preventDefault();
        dispatch(AuthActions.logout())
    }

    return (
        <Button onClick={log} colorScheme={bg} color={color}>
            <Link To="./">Logout</Link>
        </Button>
    );
};

export default Logout;
