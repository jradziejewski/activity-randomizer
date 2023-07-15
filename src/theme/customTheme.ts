import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      dark: orange[600],
    },
    secondary: {
      main: orange[400],
    },
    background: {
      default: orange[300],
    },
  },
});
