import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initalValue) => {
    const [value, setValue] = useLocalStorage('DarkMode', initalValue);
    useEffect(() => {
        value ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
    }, [value])
    return [value,setValue]
}