import { useSelector } from "react-redux";
import Header from "./components/header";
import Form from "./components/form";
import { ChakraProvider  } from '@chakra-ui/react';

function App() {
  const isAuth = useSelector(state => state.auth.isLogged)

  return (
    <ChakraProvider>
      <Header/>
      {isAuth == "modal" && <Form/>}
    </ChakraProvider>
  );
}

export default App;
