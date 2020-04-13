import React, { Component, Fragment } from 'react';
import Particles, { RecursivePartial } from 'react-particles-js';
import { IOptions } from "tsparticles/dist/Interfaces/Options/IOptions";
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';


class App extends Component {
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
                    <ImageLinkForm />
                    {/* <FaceRecognition /> */}
                </main>
            </Fragment>
        );
    }
}

export default App;