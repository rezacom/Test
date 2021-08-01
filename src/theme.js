import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: "rgb(39, 39, 39)",
    },
  },
});

export default theme;
