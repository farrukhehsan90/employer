import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import store from "./__redux/store";
import Form from "./components/form";

function App() {

  const renderRoutes=()=> <Router>
  <Route exact path="/" component={Form} />
</Router>


  return (
    <Provider store={store}>
     {renderRoutes()}
    </Provider>
  );
}

export default App;
