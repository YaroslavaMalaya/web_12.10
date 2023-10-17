import { useState } from "react";

function Input({onInputValueChanged}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        onInputValueChanged?.(event.target.value);
    };

    return (
        <div className={'inputs'}>
            <input type={'text'} value={inputValue} onChange={handleInputChange}/>
        </div>
    );
}

export default Input;