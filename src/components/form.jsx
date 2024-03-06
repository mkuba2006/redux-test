import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/authentication";
import { Input, InputGroup, Button, InputRightElement, Flex, useColorModeValue, FormControl } from "@chakra-ui/react";
import theme from "../chakra/theme";

const Form = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const log = (e) => {
        e.preventDefault();
        if (name.trim() !== "" && password.trim() !== "") dispatch(AuthActions.login());
    }
    const color = useColorModeValue(theme.colors.formtext.light, theme.colors.formtext.dark);
    const navcolor = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    const formbg = useColorModeValue(theme.colors.formbg.light, theme.colors.formbg.dark);
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
                            <Button colorScheme='blue' size='sm' onClick={log}>Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;

