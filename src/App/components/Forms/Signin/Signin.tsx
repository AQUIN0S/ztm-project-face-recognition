import React from 'react';
import './Signin.css';

interface SigninProps {
    onRouteChange: Function;
}

const Signin = (props: SigninProps) => {
    return (
        <div>
            <fieldset>
                <legend>Sign In</legend>
                <div className="userForm">
                    <div className="formGrid">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="signinEmail" name="email" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="signinPassword" />
                    </div>
                    <div className="submitForm">
                        <span className="link" onClick={() => {props.onRouteChange('register')}}>Register</span>
                        <button type="submit" onClick={() => {props.onRouteChange('home')}}>Sign In</button>
                    </div>
                </div>
                
            </fieldset>
        </div>
    );
}

export default Signin;