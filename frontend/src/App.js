import React, { useState, useEffect } from "react";
import "./App.scss";

import { TYPING_ANIMATION_CONTENT } from "./consts/generalConsts";

import SignupP from "./pages/signup-p/SignupP";
import LoginP from "./pages/login-p/LoginP";

function App() {
    const [typingAnimationContent, setTypingAnimationContent] = useState(
        TYPING_ANIMATION_CONTENT
    );

    useEffect(() => {
        const interval = setInterval(() => {
            // This doesn't work because we're changing the state to its previous value, so the component won't rerender.
            // setBackgroundAnimationContent(BACKGROUND_ANIMATION_CONTENT);

            setTypingAnimationContent([...TYPING_ANIMATION_CONTENT]);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="app">
            {/* <SignupP typingAnimationContent={typingAnimationContent} /> */}
            <LoginP typingAnimationContent={typingAnimationContent} />
        </div>
    );
}

export default App;
