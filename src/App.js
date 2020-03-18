import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { store } from "./__redux/store";
import { FormFields } from "./components/FormFields";

export const App = () => {
  const renderRoutes = () => (
    <Router>
      <Route exact path="/" component={FormFields} />
    </Router>
  );

  return <Provider store={store}>{renderRoutes()}</Provider>;
};
