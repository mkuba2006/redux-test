import Login from "./signs/login";
import Logout from "./signs/logout";
import Register from "./signs/register";
import '../styles/header.css'; 
import { useSelector } from "react-redux";
import { Flex, Text, useColorMode, useColorModeValue, Center, Switch, useToast } from '@chakra-ui/react';
import theme from "./chakra/theme";
import { Link, useLocation } from 'react-router-dom';
import Add_CART from "./add_card/add_card";
import { useEffect } from "react";

const Header = () => {
    const isAuth = useSelector(state => state.auth.isLogged);
    const { toggleColorMode } = useColorMode();
    const toast = useToast();
    const navcolor = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    const bcb = useColorModeValue(theme.colors.bcb.light, theme.colors.bcb.dark);
    const swit = useColorModeValue(theme.colors.swit.light, theme.colors.swit.dark);
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    const handleColorModeToggle = () => {
        toggleColorMode();
        toast({
            title: 'Color changed',
            description: "You've successfully changed color mode",
            status: 'success',
            duration: 1000,
            position: "bottom-right",
            isClosable: true,
        });
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg navbar-custom-padding" style={{ backgroundColor: navcolor }}>
            <div className="container-fluid d-flex justify-content-around align-items-center">
                <Center>
                    <Text style={{ color: theme.colors.text.dark }} mb={0} fontSize='3xl' fontWeight='500'>
                        <Link to="/">EASY SCHEDULE</Link>
                    </Text>
                </Center>
                <Flex gap={2} background={bcb} px='5' py='2' borderRadius='7'>
                    <Link to="/register" className={isActive("/register") ? "active-link" : ""}>
                        <Register />
                    </Link>
                    {isAuth === "false" ? (
                        <Link to="/login" className={isActive("/login") ? "active-link" : ""}>
                            <Login theme={theme} />
                        </Link>
                    ) : (
                        <Link to="/logout" className={isActive("/logout") ? "active-link" : ""}>
                            <Logout theme={theme} />
                        </Link>
                    )}
                    <Add_CART />
                    <Center ml='2'>
                        <Switch id='email-alerts' size='lg' onChange={handleColorModeToggle} sx={{ '.chakra-switch__track': { backgroundColor: swit }, '.chakra-switch__thumb': { backgroundColor: 'white' } }} />
                    </Center>
                </Flex>
            </div>
        </nav>
    );
};

export default Header;
