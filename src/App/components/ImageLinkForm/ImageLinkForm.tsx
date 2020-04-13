import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className="formWrapper">
            <p id="instruction">
                This Magic Brain will detect faces in your pictures. Give it a try!
            </p>
            <div>
                <input type="text" name="inputUrl" id="inputUrl"/>
                <button className="detectButton">Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;