'use client'
import { useEffect, useState } from "react";

const TypingEffect = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('');
    
    useEffect(() => {
        // let index = 0;
        const typingInterval  = setInterval(() => {
            if (displayedText.length < text.length) {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            } else {
                clearInterval(typingInterval);
            }
        }, 500);

        return () => clearInterval(typingInterval );
    }, [displayedText.length, text]);

    return displayedText
};

export default TypingEffect;