import React, {
    useState
} from 'react';

const UseLocalStorage = (key, initialValue) => {
    const [values, setValues] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = (someValue) => {
        setValues(someValue);
        window.localStorage.setItem(key, JSON.stringify(someValue));
    }
    return [values, setValue];
}



export default UseLocalStorage;