import React, { useEffect } from "react";
import { DARK_THEME, LIGHT_THEME, Theme } from "../../types/theme";

interface ThemeContextType {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            return savedTheme; // Use saved theme
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? DARK_THEME : LIGHT_THEME; // Use system preference
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);


    return <div id="tema_wrapper" className={`${theme}`}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    </div>;
}


export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export default ThemeProvider;