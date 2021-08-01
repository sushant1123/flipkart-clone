import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { createContext } from "react";

const TemplateContext = createContext(null);

const TemplateProvider = (props) => {
    const theme = createTheme({
        overrides: {
            //to remove the unwanted styles given by material UI
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: "none",
                },
            },
            MuiDialogContent: {
                root: {
                    padding: 0,
                    "&:first-child": {
                        paddingTop: 0,
                    },
                },
            },
            MuiTableCell: {
                root: {
                    borderBottom: "none",
                },
            },
        },
    });
    return (
        <TemplateContext.Provider value={null}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </TemplateContext.Provider>
    );
};

export default TemplateProvider;
