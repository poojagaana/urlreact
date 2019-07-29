import React from 'react';

const Feedback = (props) => {

    return (
        <div >
            <button className="fa fa-thumbs-up" onClick={props.likeAction}></button>
            <button className="fa fa-thumbs-down" onClick={props.dislikeAction}></button>
        </div>
    );

}

export default Feedback;