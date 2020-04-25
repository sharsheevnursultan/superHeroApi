import React from 'react';

const Status = (props) => {
    let state = props.state;
    return (
        <div>
            <div>
                <p className='status-text'>
                    Status: {state.connection}
                </p>
                <p className='status-text'>
                    Items found: {state.length}
                </p>
                <p className='status-text'>
                    Item №: {state.itemHero + 1}
                </p>
            </div>
        </div>
    )
};

export default Status;