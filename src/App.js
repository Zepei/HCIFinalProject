import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <Router>
      <Route >
        <Main />
      </Route>
    </Router>
  );
}

export default App;
