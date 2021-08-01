import { Button } from "@material-ui/core";
import Header from "./components/Header";
import Side from "./components/Side";
import theme from "./theme";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Main from "./pages/Main";


function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {/* <div className="container"> */}

      <div className="panel flex">
        <Side />
        <div className="main flex-1">
          <Header />
          <div className="pages">
            <Main />
          </div>
        </div>
      </div>
      {/* </div> */}
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // color: theme.palette.primary.main,
    '&$checked': {
      // color: theme.palette.primary.main,
    },
  },
  checked: {},
}));

export default App;





