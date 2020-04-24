import React, { ChangeEvent } from 'react';
import './Signin.css';

interface SigninProps {
    onRouteChange: Function;
}

interface SigninState {
    signInEmail: string;
    signInPassword: string;
}

class Signin extends React.Component<SigninProps, SigninState> {

    constructor(props: Readonly<SigninProps>) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        };
    };

    onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ signInEmail: event.target.value });
    }

    onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ signInPassword: event.target.value });
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data === 'success') {
                    this.props.onRouteChange('home')
                }
            });
    }

    onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            this.onSubmitSignIn();
        }
    }

    render() {

        return (
            <div>
                <fieldset>
                    <legend>Sign In</legend>
                    <div className="userForm">
                        <div className="formGrid">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="signinEmail"
                                name="email"
                                onChange={this.onEmailChange}
                                onKeyPress={this.onEnterPress}
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="signinPassword"
                                onChange={this.onPasswordChange}
                                onKeyPress={this.onEnterPress}
                            />
                        </div>
                        <div className="submitForm">
                            <span className="link" onClick={() => {this.props.onRouteChange('register')}}>Register</span>
                            <button type="submit" onClick={this.onSubmitSignIn}>Sign In</button>
                        </div>
                    </div>
                    
                </fieldset>
            </div>
        );
    };
    
}

export default Signin;