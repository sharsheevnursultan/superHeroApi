import React from 'react';

const Status = (props) => {
    let state = props.state;
    return (
        <div>
            <div>
                <p className='m-0'>
                    Status: {state.connection}
                </p>
                <p className='m-0'>
                    Items found: {state.length}
                </p>
                <p className='m-0'>
                    Item №: {state.itemHero + 1}
                </p>
            </div>
        </div>
    )
};

export default Status;