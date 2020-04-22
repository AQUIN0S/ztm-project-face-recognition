import React, { CSSProperties } from 'react';
import './FaceRecognition.css';

interface FaceRecognitionProps {
    imageLink?: string;
    regions?: Array< {
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

const FaceRecognition = (props: FaceRecognitionProps) => {
    const ancestorStyle: CSSProperties = {
        position: "relative"
    }
    return (
        <div className="imageWrapper" style={ancestorStyle}>
            <img className="faceImage" src={props.imageLink}></img>
            {props.regions.map((region, index) => {
                const boundingBox = region.region_info.bounding_box;
                const styleProps: CSSProperties = {
                    position: "absolute",
                    top: boundingBox.top_row * 100 + "%",
                    bottom: 100 - boundingBox.bottom_row * 100 + "%",
                    left: boundingBox.left_col * 100 + "%",
                    right: 100 - boundingBox.right_col * 100 + "%",
                    border: "1px solid red"
                }
                return (
                    <div key={"Box " + index} style={styleProps}></div>
                );
            })}
        </div>
        
    );
}

export default FaceRecognition;
