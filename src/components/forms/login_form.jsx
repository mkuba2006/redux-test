import React, { useState } from "react";
import { Input, InputGroup, Button, InputRightElement, Flex, useColorModeValue, FormControl, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/authentication";
import { Link } from "react-router-dom";
import theme from "../../chakra/theme";
import { auth } from "../auth/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Loginform = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const toast = useToast();

    const log = (e) => {
        e.preventDefault();
        if (name.trim() !== "" && password.trim() !== "") {
            signInWithEmailAndPassword(auth ,name, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                console.log(user.email);
                dispatch(AuthActions.login());
                toast({
                    title: 'Success',
                    description: "You are logged in",
                    status: 'success',
                    duration: 2000,
                    position: "bottom-right",
                    isClosable: true,
                });
            }).catch((err)=>{
                toast({
                    title: 'Error',
                    description: "Failed to sign in",
                    status: 'error',
                    duration: 2000,
                    position: "bottom-right",
                    isClosable: true,
                });
            })
        }

    }
    const color = useColorModeValue(theme.colors.formtext.light, theme.colors.formtext.dark);
    const formbg = useColorModeValue(theme.colors.formbg.light, theme.colors.formbg.dark);

    const loginButton = (
        <Button colorScheme='blue' size='sm' onClick={log}>
            {name.trim() !== "" && password.trim() !== "" ? (
                <Link to="/">
                    Login
                </Link>
            ) : (
                <span>Login</span>
            )}
        </Button>
    );


    return (
        <div>
        <div className="modal show" tabIndex="-1" style={{ display: 'block', marginTop: '50px' }}>
            <div className="modal-dialog" >
                <div className="modal-content" style={{ backgroundColor: formbg }} >
                    <div style={{padding: 15}}>
                        <h5 style={{ color: color }} className="modal-title">Complete the form</h5>
                    </div>
                    <Flex gap='3' flexDirection={"column"} padding={3}>
                        <FormControl id="name" colorScheme="blue">
                            <Input style={{ color: color }} variant='outline' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <InputGroup size='md'>
                            <FormControl id="password" colorScheme="blue">
                                <Input
                                    style={{ color: color }}
                                    type={show ? 'text' : 'password'}
                                    placeholder='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Flex>
                    <div style={{ padding: 15, textAlign: 'right' }}>
                        {loginButton}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Loginform;
