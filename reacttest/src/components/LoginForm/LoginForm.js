import React, {useState} from 'react';
import axios from 'axios';
import '../LoginForm/LoginForm.css' ;
import { withRouter, useHistory } from "react-router-dom";

function LoginForm(props) {
    
    const [state , setState] = useState({
        email : "",
        password : "",

    })
      
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        localStorage.setItem('email', state.email);
        localStorage.setItem('password', state.password);
        const payload={
            "email":state.email,
            "password":state.password,
          
        }

        axios.get('http://localhost:3000/users', payload)
        
            .then(function (response) {
              let Data= response.data.filter(d=>d.email===payload.email);
                if(Data.length>0 && Data[0].password===payload.password){
                  
             
                    setState(prevState => ({
                      ...prevState,
                      'successMessage' : 'Login successful. Redirecting to home page..'
                     
                 }))
                 redirectToHome();
                 }
                  else{
                    
                    props.showError('Please enter valid Credentials')
                  }
               

                
            })
            .catch(function (error) {
                console.log(error);
            });
     
            
    }
    

    let  history = useHistory();
    const redirectToHome = () => {
        history.push('/home');
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       required
                       value={state.email}
                       onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                     
                       placeholder="Password"
                       required
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>

        </div>
    )
}

export default withRouter(LoginForm);