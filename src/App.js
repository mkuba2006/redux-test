import { useSelector } from "react-redux";
import Header from "./components/header";
import { Fragment } from "react";

function App() {
  const isAuth = useSelector(state => state.auth.isLogged)

  return (
    <Fragment>
      <Header/>
      {isAuth && <p>you're logged</p>}
    </Fragment>
  );
}

export default App;
