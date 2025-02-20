import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Flex, Text, useColorMode, useColorModeValue, Center, Switch, useToast } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import theme from "./chakra/theme";
import Login from "./signs/login";
import Logout from "./signs/logout";
import Register from "./signs/register";
import Add_CART from "./add_card/add_card";
import '../styles/header.css'; 

const Header = () => {
    const isAuth = useSelector(state => state.auth.isLogged);
    const { toggleColorMode } = useColorMode();
    const toast = useToast();
    const navcolor = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    const bcb = useColorModeValue(theme.colors.bcb.light, theme.colors.bcb.dark);
    const swit = useColorModeValue(theme.colors.swit.light, theme.colors.swit.dark);
    const location = useLocation();

    useEffect(() => {
        document.querySelectorAll("#register, #login, #logout, #items").forEach(el => {
            el.style.backgroundColor = "transparent";
            el.style.borderRadius = "5px"; 
        });
        const currentId = location.pathname.substring(1);
        const activeElement = document.getElementById(currentId);
        if (activeElement) {
            activeElement.style.backgroundColor = "#16C47F";
            activeElement.style.borderRadius = "25px";
        }
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

    return (
        <nav className="navbar navbar-expand-lg navbar-custom-padding" style={{ backgroundColor: navcolor }}>
            <div className="container-fluid d-flex justify-content-around align-items-center">
                <Center>
                    <Text style={{ color: theme.colors.text.dark }} mb={0} fontSize='3xl' fontWeight='500'>
                        <Link to="/">EASY SCHEDULE</Link>
                    </Text>
                </Center>
                <Flex gap={2} background={bcb} px='5' py='2' borderRadius='7' id="pasek">
                    <Link id="register" to="/register">
                        <Register />
                    </Link>
                    {isAuth === "false" ? (
                        <Link id="login" to="/login">
                            <Login theme={theme} />
                        </Link>
                    ) : (
                        <Link id="logout" to="/logout">
                            <Logout theme={theme} />
                        </Link>
                    )}
                    <div id="items">
                        <Add_CART />
                    </div>
                    <Center ml='2'>
                        <Switch  id='email-alerts'  size='lg'  onChange={handleColorModeToggle}  sx={{ '.chakra-switch__track': { backgroundColor: swit }, '.chakra-switch__thumb': { backgroundColor: 'white' } }} />
                    </Center>
                </Flex>
            </div>
        </nav>
    );
};

export default Header;
