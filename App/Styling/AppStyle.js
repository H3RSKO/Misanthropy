import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import '../../public/fonts.css'
import button11 from '../../public/images/button11.png'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00f464',
      light: '#6aff95',
      dark: '#00c033',
      contrastText: '#f0fffb',
    },
    secondary: {
      main: '#78f4dd',
      light: '#aeffff',
      dark: '#3fc1ab',
      contrastText: '#f0fffb',
    }
  },
  typography: {
    fontFamily: "Piazzolla",
    // fontSize: 19,
    button: {
      backgroundImage: 'url(' + button11 + ')',
      'background-repeat': 'no-repeat',
      // 'background-attachment': 'fixed',
      'background-position': 'center',
      'background-size': 'cover'
    },
  },
  input: {
    color: "red"
  },
  // possibly superfluous 👇
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face':
          '"Piazzolla"'
      },
    },
    // for typed text in forms
    MuiInputBase: {
      input: {
        color: '#aeffff',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#aeffff',
      },
    },
    MuiOutlinedInput: {
      root: {
        '&:hover  notchedOutline': {
          borderColor: '#aeffff',
        }
      },
      notchedOutline: {
        borderColor: '#aeffff',
      }
    }
  }
});
// theme = responsiveFontSizes(theme);

export default theme
