






































import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/authentication";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useColorModeValue, Flex, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Link } from "react-router-dom";
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
      <Button  colorScheme={bg} color={color}>
          <Link to="/login">
              Login
          </Link>
      </Button>
    );
};

export default Login;
