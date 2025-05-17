import { useLang } from "../contexts/langContext";
import { useTheme } from "../contexts/themeContext";
import { DARK_THEME, LIGHT_THEME } from "../types/theme";




export default function ThemeSwitcher({ changeTextColor, callback }: { changeTextColor?: boolean, callback?: () => void }) {
    const { t } = useLang()
    const { theme, setTheme } = useTheme();

    const handleOnClick = () => {
        const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        setTheme(newTheme);
        callback && callback();
    };

    return (
        <label className="inline-flex items-center cursor-pointer ms-3 lg:ms-0 mb-4 lg:mb-0 lg:me-2">
            <input type="checkbox" value="" checked={theme === DARK_THEME} className="sr-only peer" onChange={handleOnClick} />
            <div className="relative w-11 h-6 bg-secondary dark:bg-white peer-focus:outline-none peer-focus:ring-0 border-2 border-white/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:start-[1px] after:bg-white dark:after:bg-secondary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className={`ms-3 text-sm  ${changeTextColor ? 'text-secondary' : 'text-white'}`}>{theme === DARK_THEME ? t('Светла тема', "theme_light") : t('Тамна тема', "theme_dark")}</span>
        </label>
    );
}