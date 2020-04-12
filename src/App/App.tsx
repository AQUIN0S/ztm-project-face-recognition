import React, { Component, Fragment } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                {/* <Logo />
                <ImageLinkForm />
                <FaceRecognition /> */}
            </Fragment>
        );
    }
}

export default App;