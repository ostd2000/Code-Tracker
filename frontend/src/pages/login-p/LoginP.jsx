import React from "react";
import "./LoginP.scss";

import TypingAnimationC from "../../components/typing-animation-c/TypingAnimationC";
import LoginC from "../../components/login-c/LoginC";

const LoginP = ({ typingAnimationContent }) => {
    return (
        <div className="login-p flex-vert-center">
            <TypingAnimationC content={typingAnimationContent} />

            <LoginC className="login-p__login" />
        </div>
    );
};

export default LoginP;
