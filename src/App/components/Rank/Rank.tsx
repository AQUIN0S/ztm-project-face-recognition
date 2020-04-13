import React from 'react';
import './Rank.css';

const Rank = () => {
    return (
        <div className="rankWrapper">
            <p className="description halfMargin">
                Daniel, your current rank is...
            </p>
            <p className="emphasis halfMargin">
                #5
            </p>
        </div>
    );
}

export default Rank;