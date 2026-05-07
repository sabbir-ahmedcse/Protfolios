import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') return true;
        if (savedTheme === 'light') return false;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Apply theme to DOM whenever darkMode state changes
    useEffect(() => {
        const htmlElement = document.documentElement;
        const bodyElement = document.body;

        if (darkMode) {
            htmlElement.dataset.theme = 'dark';
            htmlElement.classList.add('dark');
            bodyElement.classList.add('dark');
            htmlElement.style.colorScheme = 'dark';
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.dataset.theme = 'light';
            htmlElement.classList.remove('dark');
            bodyElement.classList.remove('dark');
            htmlElement.style.colorScheme = 'light';
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
