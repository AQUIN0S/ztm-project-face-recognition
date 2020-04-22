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
}


class App extends Component<{}, AppState> {

    constructor(props: Readonly<AppState>) {
        super(props);
        this.state = {
            input: '',
            imageLink: '',
            regions: []
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
        clarifai.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
            (response: ClarifaiResponse) => {
                this.setState({ regions: response.rawData.outputs[0].data.regions });
            },
            (err: Error) => {
                console.log(err);
            }
        );
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
                    <FaceRecognition regions={this.state.regions} imageLink={this.state.imageLink} />
                </main>
            </Fragment>
        );
    }
}

export default App;