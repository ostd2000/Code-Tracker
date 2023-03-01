import React from "react";
import "./SignupP.scss";

import TypingAnimationC from "../../components/typing-animation-c/TypingAnimationC";
import SignupC from "../../components/signup-c/SignupC";

const SignupP = ({ typingAnimationContent }) => {
    return (
        <div className="signup-p">
            <TypingAnimationC content={typingAnimationContent} />

            <SignupC className="signup-p__signup" />
        </div>
    );
};

export default SignupP;
