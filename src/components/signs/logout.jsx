import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/authentication";
import '../../styles/header.css'
import { Button, useColorModeValue } from "@chakra-ui/react";


const Logout = ({theme}) => {
    const dispatch = useDispatch()
    const color = useColorModeValue(theme.colors.formtext.light, theme.colors.formtext.dark);
    const bg = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    const log = (e) =>{
        e.preventDefault();
        dispatch(AuthActions.logout())
    }

    return (
        <Button onClick={log} colorScheme={bg} color={color}>Logout</Button>
    );
};

export default Logout;
