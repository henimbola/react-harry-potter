import { orange, green, purple, red, amber, grey, deepOrange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { PaletteMode } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        palette: {
            mode: string,
            primary: {
                main: string
            }
        },
        status: {
            danger: string
        }
    }

    interface ThemeOptions {
        status?: {
            danger?: string;
        }
    }
}

const lightPalette = {
    // palette values for light mode
    primary: amber,
    divider: amber[200],
    text: {
        primary: grey[900],
        secondary: grey[800],
    },
}

const darkPalette = {
    // palette values for dark mode
    primary: deepOrange,
    divider: deepOrange[700],
    background: {
        default: deepOrange[900],
        paper: deepOrange[900],
    },
    text: {
        primary: '#fff',
        secondary: grey[500],
    },
}

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === LIGHT_THEME ? lightPalette : darkPalette)
    }
})

export const ColorModeContext = React.createContext({ toggleColorMode: () => { console.log('unempty the function') } })

const CustomThemeProvider = ({ children }: any) => {

    const [themeMode, setThemeMode] = React.useState<PaletteMode>(LIGHT_THEME);

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setThemeMode((prevMode: PaletteMode) =>
                    prevMode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
                )
            }
        }),
        []
    )

    const theme = React.useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode])

    return <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ColorModeContext.Provider>
}

export default CustomThemeProvider;