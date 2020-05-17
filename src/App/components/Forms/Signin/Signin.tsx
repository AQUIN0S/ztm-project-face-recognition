import React, { ChangeEvent } from 'react';
import './Signin.css';

interface SigninProps {
    loadUser: Function;
    onRouteChange: Function;
}

interface SigninState {
    signInEmail: string;
    signInPassword: string;
    signInError: string;
}

class Signin extends React.Component<SigninProps, SigninState> {

    constructor(props: Readonly<SigninProps>) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            signInError: ''
        };
    };

    onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ signInEmail: event.target.value });
    }

    onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ signInPassword: event.target.value });
    }

    onSubmitSignIn = async () => {
        const response = await fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })

        if (response.status === 200) {
            this.setState({signInError: ''});
            this.props.loadUser(await response.json());
            this.props.onRouteChange('home');
        } else {
            this.setState({
                signInError: 'Error logging in. Please check your email and password again',
                signInPassword: ''
            });
        }
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
                            {this.state.signInError ? <div className="error">{this.state.signInError}</div> : null}
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
                                value={this.state.signInPassword}
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