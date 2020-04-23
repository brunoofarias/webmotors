import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "Roboto",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Arial",
            "sans-serif"
        ].join(","),
        useNextVariants: true
    },
    palette: {
        primary: {
            light: '#ff5b5c',
            main: '#ff0032',
            dark: '#c3000b',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#718792',
            main: '#455a64',
            dark: '#1c313a',
            contrastText: '#fff'
        }
    }
});

export default theme
