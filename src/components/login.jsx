import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/authentication";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useColorModeValue, Flex, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

const Login = ({ theme }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const log = (e) => {
        e.preventDefault();
        if (name.trim() !== "" && password.trim() !== "") dispatch(AuthActions.login());
        setIsOpen(false);
    };

    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    const color = useColorModeValue(theme.colors.formtext.light, theme.colors.formtext.dark);
    const bg = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    
    return (
        <>
          <Button onClick={onOpen} colorScheme={bg} color={color}>Login</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Complete the form</ModalHeader>
              <ModalCloseButton onClick={onClose} />
              <ModalBody>
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
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' size='sm' onClick={log}>Login</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
    );
};

export default Login;
