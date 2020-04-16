import React from 'react';
import './ImageLinkForm.css';

interface ImageLinkFormProps {
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: Function;
}

const ImageLinkForm = ({ onInputChange, onSubmit }: ImageLinkFormProps) => {
    return (
        <div className="formWrapper">
            <p id="instruction">
                This Magic Brain will detect faces in your pictures. Give it a try!
            </p>
            <div>
                <input
                    type="text"
                    name="inputUrl"
                    id="inputUrl"
                    onKeyPress={
                        (event: React.KeyboardEvent<HTMLInputElement>): void => {
                            if (event.key === "Enter") {
                                onSubmit();
                            }
                        }
                    }
                    onChange={
                        (event: React.ChangeEvent<HTMLInputElement>): void => {
                            onInputChange(event);
                        }
                    }
                />
                <button
                    className="detectButton"
                    onClick={ (event: React.MouseEvent<HTMLButtonElement>): void => {onSubmit()} }
                >Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;