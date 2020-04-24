import React from 'react';
import classes from './BigInfo.module.css'

const BigInfo = (props) => {

    return (
        <div className='col-md-9'>
            <div className='row'>
                <div className='col-md-6'>
                    <h4 className={classes.h4}>Power stats:</h4>
                    <div
                        className="infoPlaces">
                        <span className='title-char'>Intelligence: </span>
                        <span>{props.state.intelligence}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Strength: </span>
                        <span>{props.state.strength}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Speed: </span>
                        <span>{props.state.speed}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Durability: </span>
                        <span className='border_bottom-dotted'> </span>
                        <span>{props.state.durability}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Power: </span>
                        <span>{props.state.power}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Combat: </span>
                        <span>{props.state.combat}</span>
                    </div>
                </div>
                <div className='col-md-6'>
                    <h4 className={classes.h4}>Appearance:</h4>
                    <div className='infoPlaces'>
                        <span className='title-char'>Gender: </span>
                        <span>{props.state.gender}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Race: </span>
                        <span>{props.state.race}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Height: </span>
                        <span>{props.state.height}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Weight: </span>
                        <span>{props.state.weight}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Eye color: </span>
                        <span>{props.state.eye_color}</span>
                    </div>
                    <div className='infoPlaces'>
                        <span className='title-char'>Hair color: </span>
                        <span>{props.state.hair_color}</span>
                    </div>
                </div>
            </div>
            <div>
                <h4 className={classes.h4}>Biography:</h4>
                <div className='infoPlaces'>
                    <span className='title-char'>Full name: </span>
                    <span>{props.state.full_name}</span>
                </div>
                <div className='infoPlaces'>
                    <span className='title-char'>Alter ego`s:</span>
                    <span>{props.state.alter_egos}</span>
                </div>
                <div className='infoPlaces'>
                    <span className='title-char'>Aliases: </span>
                    <span>{props.state.aliases}</span>
                </div>
                <div className='infoPlaces'>
                    <span className='title-char'>Place of birth: </span>
                    <span>{props.state.place_of_birth}</span>
                </div>
                <div className='infoPlaces'>
                    <span className='title-char'>First appearance: </span>
                    <span>{props.state.first_appearance}</span>
                </div>
                <div className='infoPlaces'>
                    <span className='title-char'>Publisher: </span><
                    span>{props.state.publisher}</span>
                </div>
                <div className='infoPlaces'>
                    <span className='title-char'>Alignment: </span>
                    <span>{props.state.alignment}</span>
                </div>
            </div>
            <div>
                <h4 className={classes.h4}>Work:</h4>
                <div className='infoPlaces'>
                    <span className='title-char'>Occupation: </span>
                    <span>{props.state.occupation}</span>
                </div>
                <div className='infoPlaces'>
                    <span className='title-char'>Base: </span>
                    <span>{props.state.base}</span>
                </div>
            </div>
            <div>
                <h4 className={classes.h4}>Connections:</h4>
                <div className='infoPlaces'>
                    <span className='title-char'>Group affiliation: </span>
                    <span>{props.state.group_affiliation}</span>
                </div>
                <div className='infoPlaces'>
                    <span className='title-char'>Relatives: </span>
                    <span>{props.state.relatives}</span>
                </div>
            </div>
        </div>

    )


};

export default BigInfo;