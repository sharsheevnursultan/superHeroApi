import React from 'react';

const Status = (props) => {

    let state = props.state;

    return (
        <div>
            <div>
                <p>
                    Status: {state.connection}
                </p>
                <p>
                    Items found: {state.length}
                </p>
                <p>
                    Item №: {state.itemHero + 1}
                </p>

            </div>
        </div>

    )


};

export default Status;