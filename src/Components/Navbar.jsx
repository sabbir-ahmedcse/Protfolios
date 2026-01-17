import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Dark mode toggle function
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    // Check saved theme on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    // Navigation links array for better maintainability
    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/skills", label: "Skills" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" }
    ];

    // Custom NavLink component for consistent styling
    const CustomNavLink = ({ to, children }) => (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive
                    ? 'bg-primary text-primary-content shadow-md'
                    : 'hover:bg-base-300 hover:text-base-content'
                }`
            }
        >
            {children}
        </NavLink>
    );

    return (
        <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
            <div className="navbar-start">
                {/* Mobile menu button */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-56 p-2 shadow-2xl border border-base-300"
                    >
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <CustomNavLink to={item.path}>
                                    {item.label}
                                </CustomNavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logo/Brand */}
                <a
                    href="#"
                    className="inline-flex items-center gap-2 select-none font-extrabold tracking-tight text-2xl md:text-3xl lg:text-4xl transition-transform duration-300 hover:scale-105"
                >
                    {/* Small branding circle/icon */}
                    <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"></span>

                    {/* Gradient first name */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                        SABBIR
                    </span>

                    {/* Solid last name */}
                    <span className="text-gray-900 dark:text-gray-100">AHMED</span>
                </a>


            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <CustomNavLink to={item.path}>
                                {item.label}
                            </CustomNavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side buttons */}
            <div className="navbar-end gap-2">
                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="btn btn-ghost btn-circle"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </button>

                {/* Call to Action Button */}
                <button className="btn btn-primary shadow-lg hover:shadow-xl transition-shadow">
                    Hire Me
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navbar;