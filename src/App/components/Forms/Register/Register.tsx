import React, { ChangeEvent } from 'react';
import './Register.css';

interface RegisterProps {
    onRouteChange: Function;
    loadUser: Function;
}

interface RegisterState {
    email: string;
    password: string;
    name: string;
}

class Register extends React.Component<RegisterProps, RegisterState> {
    constructor(props: Readonly<RegisterProps>) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value });
    }

    onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: event.target.value });
    }

    onSubmitRegister = () => {
        console.log("Hello?????");
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            });
    }
    
    onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            this.onSubmitRegister();
        }
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Register</legend>
                    <div className="userForm">
                        <div className="formGrid">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="registerName"
                                onChange={this.onNameChange}
                                onKeyPress={this.onEnterPress}
                            />
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="registerEmail"
                                name="email"
                                onChange={this.onEmailChange}
                                onKeyPress={this.onEnterPress}
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="registerPassword"
                                onChange={this.onPasswordChange}
                                onKeyPress={this.onEnterPress}
                            />
                        </div>
                        <div className="submitForm">
                            <span className="link" onClick={() => {this.props.onRouteChange('signin')}}>Sign In</span>
                            <button type="submit" onClick={this.onSubmitRegister}>Register</button>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default Register;