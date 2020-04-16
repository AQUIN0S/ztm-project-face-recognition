import React, { Component, Fragment, KeyboardEvent, ChangeEvent } from 'react';
import Particles, { RecursivePartial } from 'react-particles-js';
import { IOptions } from "tsparticles/dist/Interfaces/Options/IOptions";
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const Clarifai = require('clarifai');

const clarifai = new Clarifai.App({
    apiKey: "f83d3899096043da8c73f62fc87df2c5"
});

class App extends Component {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            input: ''
        }
    }

    onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        this.setState({
            input: (event.currentTarget.value)
        });
    }

    onSubmit = () => {
        console.log("click");
    }

    render() {

        const particlesOptions: RecursivePartial<IOptions> = {
            particles: {
                number: {
                    value: 80
                }
            }
        }

        return (
            <Fragment>
                <Particles className="particles" params={particlesOptions} />
                <header style={{margin: 1 + "rem"}}>
                    <Logo />
                    <Navigation />
                </header>
                <main>
                    <Rank />
                    <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
                    {/* <FaceRecognition /> */}
                </main>
            </Fragment>
        );
    }
}

export default App;