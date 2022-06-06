import { createTheme } from "@material-ui/core/styles";
import { lightGreen, blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: lightGreen[700],
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
  },
});
