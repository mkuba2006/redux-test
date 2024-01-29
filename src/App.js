import { useSelector } from "react-redux";
import Header from "./components/header";
import { Fragment } from "react";
import Form from "./components/form";

function App() {
  const isAuth = useSelector(state => state.auth.isLogged)

  return (
    <Fragment>
      <Header/>
      {isAuth == "modal" && <Form/>}
    </Fragment>
  );
}

export default App;
