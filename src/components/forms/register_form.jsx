import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/authentication";
import { Input, InputGroup, Button, InputRightElement, Flex, useColorModeValue, FormControl, useToast } from "@chakra-ui/react";
import theme from "../chakra/theme";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../auth/firebase";


const Registerform = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const toast = useToast();
    const [show, setShow] = React.useState(false)
    const [show2, setShow2] = React.useState(false)

    const handleClick = () => setShow(!show)
    const handleClick2 = () => setShow2(!show2)

    const log = (e) => {
        e.preventDefault();
        if (name.trim() !== "" && password.trim() !== "" && password.trim() === password2.trim()) {
            createUserWithEmailAndPassword(auth ,name, password)
            .then((userCredential)=>{
                dispatch(AuthActions.login());
                toast({
                    title: 'Success',
                    description: "Your account has been successfully created",
                    status: 'success',
                    duration: 2000,
                    position: "bottom-right",
                    isClosable: true,
                });
                console.log(userCredential);
            }).catch((err)=>{
                toast({
                    title: 'Error',
                    description: "Failed to create account",
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
            {name.trim() !== "" && password.trim() !== "" && password.trim() === password2.trim() ? (
                <Link to="/" >
                    Register
                </Link>
            ) : (
                <span>Register</span>
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
                            <InputGroup size='md'>
                                <FormControl id="password2" colorScheme="blue">
                                    <Input
                                        style={{ color: color }}
                                        type={show2 ? 'text' : 'password'}
                                        placeholder='Repeat password'
                                        value={password2}
                                        onChange={(e) => setPassword2(e.target.value)}
                                    />
                                </FormControl>
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick2}>
                                        {show2 ? 'Hide' : 'Show'}
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

export default Registerform;
