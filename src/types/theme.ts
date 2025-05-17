//themes: light, dark

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

export const availableThemes = [LIGHT_THEME, DARK_THEME];

export type Theme = typeof availableThemes[number];

export const displayThemeNames = (theme: Theme) => {
    switch (theme) {
        case LIGHT_THEME:
            return 'Светла';
        case DARK_THEME:
            return 'Тамна';
        default:
            return '';
    }
};
