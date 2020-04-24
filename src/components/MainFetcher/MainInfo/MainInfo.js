import React from 'react';

const MainInfo = (props) => {

    return (
        <div className='col-md-3'>
            <div className='d-flex'>
                <div className='margin0auto'>
                    <img className='imgSize' src={props.state.image} alt=' '/>
                </div>
            </div>
            <div>
                <div className='infoPlaces'>
                    <span className='title-char'>Name: </span><span>{props.state.name}</span>
                </div>
                <div className='infoPlaces'>
                    <span className='title-char'>ID in base: </span><span>{props.state.id}</span>
                </div>
            </div>
        </div>

    )


};

export default MainInfo;