import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm';
import Home from './components/Home/Home';
// import PrivateRoute from './utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  


  return (
    <Router>
    <div className="App">
      <Header/>
       <div className="container d-flex align-items-center flex-column">
          <Switch>

            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route  path="/home">
              <Home/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
