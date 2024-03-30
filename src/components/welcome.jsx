// import Card from "./cards/card_ui"
// const Welcome = () => {
//     return (
//         <div>
//             <Card/>
//         </div>
//     );
// };

// export default Welcome;

import "../styles/welcome.css"
import Register from "./signs/register";
import Login from "./signs/login";
import Logout from "./signs/logout";
import { useSelector } from "react-redux";
import { useColorMode, useColorModeValue} from '@chakra-ui/react';
import theme from "../chakra/theme";


const Welcome = () => {

    const isAuth = useSelector(state => state.auth.isLogged);
    const navcolor = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    const color = useColorModeValue(theme.colors.text.light, theme.colors.text.dark);




    return (
        <div id="main_welcome">
            <h1 id="welcome" style={{ color: color }} >Welcome to <span>EASY SCHEDULE</span></h1>
            <h3 id="welcome2">Create an account and start the journey</h3>
            <div id="duo">
                <Register />
                {isAuth === "false" ? <Login theme={theme} /> : <Logout theme={theme}/>}
            </div>
        </div>
    );
};

export default Welcome;
