import React from 'react';
import './Register.css';

interface RegisterProps {
    onRouteChange: Function;
}

const Register = (props: RegisterProps) => {
    return (
        <div>
            <fieldset>
                <legend>Register</legend>
                <div className="userForm">
                    <div className="formGrid">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="registerName" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="registerEmail" name="email" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="registerPassword" />
                    </div>
                    <div className="submitForm">
                        <span className="link" onClick={() => {props.onRouteChange('signin')}}>Sign In</span>
                        <button type="submit" onClick={() => {props.onRouteChange('home')}}>Register</button>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default Register;