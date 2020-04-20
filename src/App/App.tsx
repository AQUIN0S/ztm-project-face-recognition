import React, { Component, Fragment, ChangeEvent } from 'react';
import Particles, { RecursivePartial } from 'react-particles-js';
import { IOptions } from "tsparticles/dist/Interfaces/Options/IOptions";
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import Clarifai, { ClarifaiResponse } from 'clarifai';

const clarifai = new Clarifai.App({
    apiKey: "f83d3899096043da8c73f62fc87df2c5"
});

interface AppState {
    input: string;
    imageLink: string;
}


class App extends Component<{}, AppState> {

    constructor(props: Readonly<AppState>) {
        super(props);
        this.state = {
            input: '',
            imageLink: ''
        }
    }

    onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
        this.setState({
            input: (event.currentTarget.value)
        });
    }

    onSubmit = () => {
        clarifai.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
            function(response: ClarifaiResponse) {
                console.log(response.rawData.outputs[0].data.regions);
            },
            function(err: Error) {
                console.log(err);
            }
        );
        this.setState({ imageLink: "https://samples.clarifai.com/face-det.jpg" });
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
                    <FaceRecognition imageLink={this.state.imageLink} />
                </main>
            </Fragment>
        );
    }
}

export default App;