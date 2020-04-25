import React from 'react';

const MainInfo = (props) => {

    return (
        <div className='col-md-3'>
            <div className='infoPlaces'>
                <span className='title-char'>Name: </span><span>{props.state.name}</span>
            </div>
            <div className='d-flex'>
                <div className='margin0auto'>
                    <img className='imgSize' src={props.state.image} alt=' '/>
                </div>
            </div>
            <div>
            </div>
        </div>

    )


};

export default MainInfo;