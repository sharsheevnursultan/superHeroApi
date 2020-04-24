import React from 'react';
import AudioPlay from "../../../audio/beep.mp3";


const InputHeader = (props) => {

    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play()
    };

    const itemHeroChangerBtn = () => {
        props.itemHeroChanger();
        playAudio()
    };

    return (
        <form className='text-center' onSubmit={props.getData}>
            <input className='form-input-name' type="text" name="id"
                   placeholder="Type Superhero name"
                   title="Type hero name"/>
            <button className='form-input-submit'
                    onClick={playAudio}
            >
                search
            </button>
            <button className='form-input-submit' onClick={itemHeroChangerBtn}>next</button>
            <audio className="audio-element d-none">
                <source src={AudioPlay}>
                </source>
            </audio>
        </form>

    )


};

export default InputHeader;