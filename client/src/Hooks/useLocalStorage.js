import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    const customSetter = (val) => {
        setValue(val);
        localStorage.setItem(key, JSON.stringify(val));
    }
    return [value, customSetter]
}