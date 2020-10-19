import { createMuiTheme } from '@material-ui/core/styles';
import '../../public/fonts.css'

const theme = createMuiTheme({
  typography: {
    fontFamily: "Piazzolla",
    fontSize: 19,
  },
  // possibly superfluous 👇
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face':
          '"Piazzolla"'
      },
    },
  },
});

export default theme
