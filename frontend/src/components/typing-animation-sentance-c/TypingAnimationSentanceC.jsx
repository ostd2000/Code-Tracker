import React, { useState, useEffect, useRef } from "react";
import { APP_COLORS } from "../../consts/generalConsts";

const TypingAnimationSentanceC = ({ sentance, x, y }) => {
    const [char, setChar] = useState("");
    const [emptyCode, setEmptyCode] = useState("");

    const codeRef = useRef();

    useEffect(() => {
        codeRef.current.style.fontSize = "14px";
        codeRef.current.style.background = `linear-gradient(to Right, ${APP_COLORS.COLOR_PRIMARY_0}, ${APP_COLORS.COLOR_SECONDARY_0})`;
        codeRef.current.style.webkitBackgroundClip = "text";
        codeRef.current.style.webkitTextFillColor = "transparent";
    }, []);

    useEffect(() => {
        let i = 1;

        codeRef.current.style.opacity = "100%";

        const interval = setInterval(() => {
            if (codeRef.current.style.opacity < 0) {
                clearInterval(interval);
            }

            codeRef.current.style.opacity = 100 - i + "%";

            i += 0.2;
        }, 10);

        return () => clearInterval(interval);
    }, [sentance, x, y]);

    useEffect(() => {
        codeRef.current.style.position = "absolute";
        codeRef.current.style.left = x;
        codeRef.current.style.top = y;
        codeRef.current.style.color = "#537EC5";
    }, [sentance, x, y]);

    useEffect(() => {
        setEmptyCode(emptyCode + char);
    }, [char]);

    useEffect(() => {
        setEmptyCode("");

        let i = 0;
        const interval = setInterval(() => {
            if (i < sentance.length) {
                setChar(sentance[i]);

                i++;
            }
        }, 100);

        return () => clearInterval(interval);
    }, [sentance, x, y]);

    return <span ref={codeRef}>{emptyCode}</span>;
};

export default TypingAnimationSentanceC;
