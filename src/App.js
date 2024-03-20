
import Header from "./components/header";
import Registerform from "./components/forms/register_form";
import Loginform from "./components/forms/login_form";
import { ChakraProvider  } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from "./components/welcome";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/register', element: <Registerform/> },
      { path: '/', element: <Welcome/> },
      { path: '/login', element: <Loginform />}
    ],
  }
]);



function App() {

  return (
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>);
}

export default App;
