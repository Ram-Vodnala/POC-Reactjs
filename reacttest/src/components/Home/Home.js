import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Table from '../Table/Table'
 
function Home(props) {
    useEffect(() => {
        fetch('../../../public/user/register.json')
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
        })

      })
    function redirectToLogin() {
    props.history.push('/login');
    }
    return(
        <div className="mt-2">
            <Table />
        </div>
    )
}

export default withRouter(Home);