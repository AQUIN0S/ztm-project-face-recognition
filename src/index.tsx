import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';

const rootElement = () => {
    const element = document.createElement("div");
    element.id = "root";
    return element;
};

document.body.insertBefore(rootElement(), document.body.firstChild);

ReactDOM.render(<App />, document.getElementById("root"));
