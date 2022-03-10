import React, { useState } from 'react';

import './MainPage.scss';

function MainPage() {

    const [isClicked, setIsClicked] = useState(false);

    const clickOnNo = () => {
        setIsClicked(true);
    }

    return (
        <section className='main-page'>
            <h1 className='main-page__title'>Welcome to the Internet</h1>
            <form className='main-form'>
                <h2 className='main-form__text'>Do you want to start?</h2>
                <div className='main-form__buttons'>
                    {isClicked ?
                        <button className='main-form__button main-form__button_resolve' type='button'>Yes</button>
                        :
                        <button type='button' className='main-form__button main-form__button_reject' onClick={clickOnNo}>No</button>
                    }
                    <button type='button' className='main-form__button main-form__button_resolve'>Yes</button>
                </div>
            </form>

        </section>

    );
}

export default MainPage;