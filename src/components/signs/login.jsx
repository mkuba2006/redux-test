import React from "react";
import { Button, useColorModeValue} from '@chakra-ui/react';
import { Link } from "react-router-dom";
const Login = ({ theme }) => {
    const color = useColorModeValue(theme.colors.formtext.light, theme.colors.formtext.dark);
    const bg = useColorModeValue(theme.colors.nav.light, theme.colors.nav.dark);
    
    return (
      <Button  colorScheme={bg} color={color}>
          <Link to="/login">Login</Link>
      </Button>
    );
};

export default Login;
