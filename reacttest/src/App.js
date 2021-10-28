import React, {useState} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/error/ErrorAlert';
import AuthRoute from './components/AuthRoute';


function App() {
  const [title,updateTitle] = useState(null);
  const [ errorMessage,updateErrorMessage] = useState(null);

  


  return (
    <Router>
    <div className="App">
      <Header title={title} />
       <div className="container d-flex align-items-center flex-column">
          <Switch>

            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
           <AuthRoute  path="/home">
              <Home  showError={updateErrorMessage} updateTitle={updateTitle}/>
            </AuthRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
