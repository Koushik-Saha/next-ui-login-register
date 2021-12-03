import React from "react";

const ScrollRoute = () => {

    let body = null
    let modal = null
    let modalButton;
    let closeButton;
    let scrollDown = null
    let isOpened = null

    if (typeof window === 'object') {
        body = document.querySelector("body");
        modal = document.querySelector(".modal");
        modalButton = document.querySelector(".modal-button");
        closeButton = document.querySelector(".close-button");
        scrollDown = document.querySelector(".scroll-down");
        isOpened = false;
    }

    const openModal = () => {
        modal.classList.add("is-open");
        body.style.overflow = "hidden";
    };

    const closeModal = () => {
        modal.classList.remove("is-open");
        body.style.overflow = "initial";
    };

    if (typeof window === 'object') {
        window.addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight / 3 && !isOpened) {
                isOpened = true;
                scrollDown.style.display = "none";
                openModal();
            }
        });
    }

    if (typeof window === 'object') {
        modalButton.addEventListener("click", openModal);
        closeButton.addEventListener("click", closeModal);

        document.onkeydown = evt => {
            evt = evt || window.event;
            evt.keyCode === 27 ? closeModal() : false;
        };
    }


    return (
        <>
            <div className="scroll-down">SCROLL DOWN
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path
                        d="M16 3C8.832031 3 3 8.832031 3 16s5.832031 13 13 13 13-5.832031 13-13S23.167969 3 16 3zm0 2c6.085938 0 11 4.914063 11 11 0 6.085938-4.914062 11-11 11-6.085937 0-11-4.914062-11-11C5 9.914063 9.914063 5 16 5zm-1 4v10.28125l-4-4-1.40625 1.4375L16 23.125l6.40625-6.40625L21 15.28125l-4 4V9z"/>
                </svg></div>
            <div className="container"/>
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-left">
                        <h1 className="modal-title">Welcome!</h1>
                        <p className="modal-desc">Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
                        <div className="input-block">
                            <label htmlFor="email" className="input-label">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="password" className="input-label">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </div>
                        <div className="modal-buttons">
                            <a href="" className="">Forgot your password?</a>
                            <button className="input-button">Login</button>
                        </div>
                        <p className="sign-up">Don't have an account? <a href="#">Sign up now</a></p>
                    </div>
                    <div className="modal-right">
                        <img
                            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                            alt=""/>
                    </div>
                    <button className="icon-button close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"/>
                        </svg>
                    </button>
                </div>
                <button className="modal-button">Click here to login</button>
            </div>
        </>
    );
};

export default ScrollRoute;
