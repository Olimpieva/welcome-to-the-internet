import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ConfirmationPopup from './ConfirmationPopup/ConfirmationPopup';

const initialState = {
    game: '',
    isOpened: false,
}

function Games(props) {

    const [confirmationPopupState, setConfirmationPopupState] = useState(initialState);

    const navigate = useNavigate();

    function handleStartGame(pathToGame) {
        console.log(pathToGame)
        navigate(pathToGame);
    };

    function handleExitGame() {
        setConfirmationPopupState(initialState);
    };

    const chooseGame = (event) => {
        setConfirmationPopupState({ game: event.target.id, isOpened: true });
    };

    return (
        <section className='games-page'>
            <div className='games-menu'>
                <h1 className='games-menu__title'>Choose your game:</h1>
                <button className='games-menu__button' id="snake" onClick={chooseGame}>Snake</button>
                <button className='games-menu__button' id="roullete">Roullete</button>
                <button className='games-menu__button' id="something">Something else</button>
            </div>
            <ConfirmationPopup
                isOpened={confirmationPopupState.isOpened}
                target={confirmationPopupState.game}
                onDenyButtonClick={handleExitGame}
                onApproveButtonClick={handleStartGame}
            />
        </section>
    );
};

export default Games;