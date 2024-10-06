import Header from "./components/header";
import Registerform from "./components/forms/register_form";
import Loginform from "./components/forms/login_form";
import { ChakraProvider  } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from "./components/welcome";
import Card from "./components/cards/card_ui";
import Error from "./components/error";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: '/register', element: <Registerform/> },
      { path: '/', element: <Welcome/> },
      { path: '/login', element: <Loginform />},
      { path: '/items', element: <Card />}
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
