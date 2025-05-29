'use client';
import { useState, useEffect } from "react";

export default function ToggleTheme() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
        setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button 
            className="cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Toggle Theme
        </button>
    );
}