import React, { Component, Fragment, ChangeEvent } from 'react';
import Particles, { RecursivePartial } from 'react-particles-js';
import { IOptions } from "tsparticles/dist/Interfaces/Options/IOptions";
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Forms/Signin/Signin';
import Register from './components/Forms/Register/Register'
import './App.css';
import Clarifai, { ClarifaiResponse } from 'clarifai';

const clarifai = new Clarifai.App({
    apiKey: "f83d3899096043da8c73f62fc87df2c5"
});

export interface User {
    id: number;
    name: string;
    email: string;
    entries: number;
    joined: Date;
}

interface AppState {
    input: string; 
    imageLink: string;
    regions: Array< {
        region_info: {
            bounding_box: {
                top_row: number,
                left_col: number,
                bottom_row: number,
                right_col: number
            }
        }
    } >;
    route: string;
    isSignedIn: boolean;
    user: User
}


class App extends Component<{}, AppState> {

    constructor(props: Readonly<AppState>) {
        super(props);
        this.state = {
            input: '',
            imageLink: '',
            regions: [],
            route: 'signin',
            isSignedIn: false,
            user: {
                id: null,
                name: '',
                email: '',
                entries: null,
                joined: null
            }
        }
    }

    onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        this.setState({
            input: (event.currentTarget.value)
        });
    }

    onSubmit = () => {
        this.setState({
            imageLink: this.state.input,
            regions: []
        });
        clarifai.models
            .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then((response: ClarifaiResponse) => {
                if (response) {
                    fetch("http://localhost:3000/image", {
                        method: 'put',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: this.state.user.id
                        })
                    })
                    .then(response => {
                        if (response.status === 200) {
                            return response.json();
                        } else {
                            return null;
                        }
                    })
                    .then(data => {
                        if (data) {
                            this.setState({
                                user: { 
                                    ...this.state.user,
                                    entries: JSON.parse(data)
                                }
                            });
                        }
                    });
                }
                this.setState({ regions: response.rawData.outputs[0].data.regions });
            })
            .catch((err: Error) => {console.log(err)});
        console.log("click");
    }

    onRouteChange = (route: string) => {
        this.setState({
            isSignedIn: route === 'home' ? true : false,
            route: route
        });
    }

    loadUser = (data: User) => {
        this.setState({
            user: data
        }, () => {
            console.log(`User loaded: ${JSON.stringify(this.state.user)}`);
        });
    }

    componentDidMount() {
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then(console.log)
            .catch(console.log);
    }

    render() {

        const { imageLink, regions, route, isSignedIn } = this.state;

        const particlesOptions: RecursivePartial<IOptions> = {
            particles: {
                number: {
                    value: 80
                }
            }
        }

        switch (route) {
            case ('home'):
                return (
                    <Fragment>
                        <Particles className="particles" params={particlesOptions} />
                        <header>
                            <Logo />
                            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                        </header>
                        <main>
                            <Fragment>
                                <Rank user={this.state.user} />
                                <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
                                <FaceRecognition regions={regions} imageLink={imageLink} />
                            </Fragment>
                        </main>
                    </Fragment>
                );

            case('signin'):
                return (
                    <Fragment>
                        <Particles className="particles" params={particlesOptions} />
                        <header>
                            <Logo />
                            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                        </header>
                        <main>
                            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                        </main>
                    </Fragment>
                );

            case('register'):
                return (
                    <Fragment>
                        <Particles className="particles" params={particlesOptions} />
                        <header>
                            <Logo />
                            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                        </header>
                        <main>
                            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                        </main>
                    </Fragment>
                );
            default:
                return (
                    <Fragment>
                        <Particles className="particles" params={particlesOptions} />
                        <header>
                            <Logo />
                            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                        </header>
                    </Fragment>
                );

        }
    }
}

export default App;