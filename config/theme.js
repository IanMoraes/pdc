import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#007fff",
        },
        secondary: {
            main: "#ee7328",
        },
        success: {
            main: "#1cef26",
        },
        info: {
            main: "#0277bd",
        },
        error: {
            main: "#fb2010",
        },
    },
    spacing: 8,
    direction: "rtl",
    shape: {
        borderRadius: 4,
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: "#689f38",
                color: "#fff",
            },
        },
        MuiButton: {
            root: {
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                border: 0,
                borderRadius: 3,
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                color: "white",
                height: 48,
                padding: "0 30px",
            },
        },
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8,
            },
            switchBase: {
                padding: 1,
                "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
                    transform: "translateX(16px)",
                    color: "#fff",
                    "& + $track": {
                        opacity: 1,
                        border: "none",
                    },
                },
            },
            thumb: {
                width: 24,
                height: 24,
            },
            track: {
                borderRadius: 13,
                border: "1px solid #bdbdbd",
                backgroundColor: "#fafafa",
                opacity: 1,
                transition: "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            },
        },
    },
    props: {
        MuiAppBar: {
            color: "inherit",
        },
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: "small",
        },
        MuiTooltip: {
            arrow: true,
        },
        MuiButton: {
            size: "small",
        },
        MuiButtonGroup: {
            size: "small",
        },
        MuiCheckbox: {
            size: "small",
        },
        MuiFab: {
            size: "small",
        },
        MuiFormControl: {
            margin: "dense",
            size: "small",
        },
        MuiFormHelperText: {
            margin: "dense",
        },
        MuiIconButton: {
            size: "small",
        },
        MuiInputBase: {
            margin: "dense",
        },
        MuiInputLabel: {
            margin: "dense",
        },
        MuiRadio: {
            size: "small",
        },
        MuiSwitch: {
            size: "small",
        },
        MuiTextField: {
            margin: "dense",
            size: "small",
        },
        MuiButtonBase: {
            disableRipple: true,
        },
    },
    typography: {
        fontFamily: "Poppins",
    },
});

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#007fff",
        },
        secondary: {
            main: "#ee7328",
        },
        success: {
            main: "#1cef26",
        },
        info: {
            main: "#0277bd",
        },
        error: {
            main: "#fb2010",
        },
    },
    spacing: 8,
    direction: "rtl",
    shape: {
        borderRadius: 4,
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: "#689f38",
                color: "#fff",
            },
        },
        MuiButton: {
            root: {
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                border: 0,
                borderRadius: 3,
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                color: "white",
                height: 48,
                padding: "0 30px",
            },
        },
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8,
            },
            switchBase: {
                padding: 1,
                "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
                    transform: "translateX(16px)",
                    color: "#fff",
                    "& + $track": {
                        opacity: 1,
                        border: "none",
                    },
                },
            },
            thumb: {
                width: 24,
                height: 24,
            },
            track: {
                borderRadius: 13,
                border: "1px solid #bdbdbd",
                backgroundColor: "#fafafa",
                opacity: 1,
                transition: "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            },
        },
    },
    props: {
        MuiAppBar: {
            color: "inherit",
        },
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: "small",
        },
        MuiTooltip: {
            arrow: true,
        },
        MuiButton: {
            size: "small",
        },
        MuiButtonGroup: {
            size: "small",
        },
        MuiCheckbox: {
            size: "small",
        },
        MuiFab: {
            size: "small",
        },
        MuiFormControl: {
            margin: "dense",
            size: "small",
        },
        MuiFormHelperText: {
            margin: "dense",
        },
        MuiIconButton: {
            size: "small",
        },
        MuiInputBase: {
            margin: "dense",
        },
        MuiInputLabel: {
            margin: "dense",
        },
        MuiRadio: {
            size: "small",
        },
        MuiSwitch: {
            size: "small",
        },
        MuiTextField: {
            margin: "dense",
            size: "small",
        },
        MuiButtonBase: {
            disableRipple: true,
        },
    },
    typography: {
        fontFamily: "Poppins",
    },
});

export {lightTheme, darkTheme};

