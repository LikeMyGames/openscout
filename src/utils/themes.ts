export type Theme = {
    text: '#${string}';
    accent: '#${string}';
    primary: '#${string}';
    secondary: '#${string}';
    background: '#${string}';
};

export type CustomTheme = {
    name: string;
    darkTheme: Theme;
    lightTheme: Theme;
}

const themes = new Map<string, CustomTheme>();
// const [theme, setTheme] = useState<Theme>();

themes.set("default", {} as CustomTheme);

// let theme: CustomTheme = themes.get("default");

// export function getTheme(): Theme {
//     return theme;
// }