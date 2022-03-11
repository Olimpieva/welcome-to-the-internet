import React, { useState } from 'react';

import './ConfirmationPopup.css';

function ConfirmationPopup({ isOpened, target, onApproveButtonClick, onDenyButtonClick }) {

    return (

        <div className={`confirmation-popup ${isOpened && 'confirmation-popup_opened'}`}>
            <form className='confirmation-popup__form'>
                <h2 className='confirmation-popup__title'>Do you want to play?</h2>
                <div className='confirmation-popup__buttons'>
                    <button className='confirmation-popup__button confirmation-popup__button_deny'
                        type='button'
                        onClick={onDenyButtonClick}
                    >
                        No
                    </button>
                    <button className='confirmation-popup__button confirmation-popup__button_approve'
                        type='button'
                        onClick={() => {
                            console.log('Ya tut?')
                            onApproveButtonClick(target);
                        }}
                    >
                        Yes
                    </button>
                </div>
            </form>
        </div>

    );
};

export default ConfirmationPopup;