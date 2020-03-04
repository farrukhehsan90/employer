import React from 'react';
import {Provider} from 'react-redux';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store/store';
import Form from './components/form/Form';

function App() {
  return (
    <Provider store={store}>
     <Router>
      <Route exact path="/" component={Form}/>
    </Router>
    </Provider>
  );
}

export default App;
