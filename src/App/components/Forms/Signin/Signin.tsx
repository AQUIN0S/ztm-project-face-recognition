import React from 'react';
import './Signin.css';

interface SigninProps {
    onRouteChange: Function;
}

const Signin = (props: SigninProps) => {
    return (
        <form action="">
            <fieldset id="signUp">
                <legend>Sign In</legend>
                <div className="signinForm">
                    <div className="formGrid">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" />
                    </div>
                <button type="submit" onClick={() => {props.onRouteChange('home')}}>Sign In</button>
                </div>
                
            </fieldset>
        </form>
    );
}

export default Signin;