import React from 'react';
import './Login.css';

function Login({location}) {
    alert(location.state);
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default Login;