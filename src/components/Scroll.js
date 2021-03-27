import React from 'react';

const style = {
    overflowY: 'scroll',
    border: '3px solid black',
    height: '800px',
};

const Scroll = (props) => {

    return (
        <div className="Scroll" style={style}>
            {props.children}
        </div>
    );
}

export default Scroll;