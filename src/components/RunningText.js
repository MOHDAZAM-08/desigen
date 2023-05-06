import React, { useEffect, useState } from 'react'

export default function RunningText() {

    const [content, setContent] = useState(["P", "r", "a", "v", "e", "e", "n"," ", "K", "u", "m", "a", "r"]);
    const [cont2, setCont2] = useState(["I", "n", "t", "e", "r", "i", "o", "r", " ", "D", "e", "s", "i", "g", "n", "e", "r"]);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setname();
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    function setname() {
        setContent([]);
        setCont2([]);

        for (let i = 0; i < content.length; i++) {
            setTimeout(() => {
                setContent((prevContent) => [...prevContent, content[i]]);
            }, i * 200);
        }

        setTimeout(() => {
            setContent([]);
            for (let j = 0; j < cont2.length; j++) {
                setTimeout(() => {
                    setCont2((prevCont2) => [...prevCont2, cont2[j]]);
                }, j * 200);
            }
            setTimeout(() => {
                setCont2([]);
                setname();
            }, cont2.length * 300);
        }, content.length * 300);
    }

    return (
        <>
            <div className="runningText">
                <span className="firstText">I'm</span>
                <div id="secondText">{[...content, ...cont2]}</div>
                <span className="line">|</span>
            </div>
            
        </>
    )
}
