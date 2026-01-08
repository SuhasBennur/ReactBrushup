import { useState, useRef, useEffect } from 'react';

export default function Appt() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const inputElement = useRef();
    useEffect(() => {
        count.current = count.current + 1;
    });
    const focusInput = () => {
        inputElement.current.focus();
    };
    return (
        <>
            <p>Type in the input field:</p>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}