import Login from "./signs/login";
import Logout from "./signs/logout";
import Register from "./signs/register";
import '../styles/header.css'; 
import { useSelector } from "react-redux";
import { Flex, Text , useColorMode, useColorModeValue, Center, Switch, useToast} from '@chakra-ui/react';
import theme from "./chakra/theme";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Add_CART from "./add_card/add_card";


const Header = () => {
    const isAuth = useSelector(state => state.auth.isLogged);
    const { toggleColorMode } = useColorMode();
    const toast = useToast();
    const navcolor = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    // const color = useColorModeValue(theme.colors.text.dark, theme.colors.text.dark);


    const handleColorModeToggle = () => {
        toggleColorMode();
        console.log('Color mode toggled');
        toast({
            title: 'Color changed',
            description: "You've successfully changed color mode",
            status: 'success',
            duration: 1000,
            position: "bottom-right",
            isClosable: true,
        });
    };

    return (
            <nav className="navbar navbar-expand-lg navbar-custom-padding" style={{ backgroundColor: navcolor }}>
                <div className="container-fluid d-flex justify-content-around align-items-center">
                    <Center>
                        <Text style={{ color: theme.colors.text.dark }} mb={0} fontSize='2xl'>
                            <Link to="/">EASY SCHEDULE</Link>
                        </Text>
                    </Center>
                    <Flex gap={2}>
                        <Register />
                        {isAuth === "false" ? <Login theme={theme} /> : <Logout theme={theme}/>}
                        <Add_CART />
                        <Center>
                            <Switch id='email-alerts' size='lg' onChange={handleColorModeToggle} />
                        </Center>
                    </Flex>
                </div>
            </nav>
    );
};

export default Header;

