import React from 'react';
import './FaceRecognition.css';

interface FaceRecognitionProps {
    imageLink?: string;
}

const FaceRecognition = (props: FaceRecognitionProps) => {
    return (<img className="faceImage" src={props.imageLink}></img>);
}

export default FaceRecognition;
