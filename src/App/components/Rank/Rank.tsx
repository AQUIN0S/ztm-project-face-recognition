import React from 'react';
import './Rank.css';
import { User } from '../../App';

interface RankProps {
    user: User;
}

const Rank = (props: RankProps) => {
    return (
        props.user.id
        ? (
            <div className="rankWrapper">
                <p className="description halfMargin">
                    {props.user.name}, your images entered:
                </p>
                <p className="emphasis halfMargin">
                    {props.user.entries}
                </p>
            </div>
        ) : null
    );
}

export default Rank;