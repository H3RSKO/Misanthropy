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
      'background-size': 'cover',
    },
  },
  // possibly superfluous 👇
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face':
          '"Piazzolla"'
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: 'rgba(0,50,46,0.85)',
        color: '#00c033',
        padding: '2em',
      }
    },
    MuiButton: {
      containedPrimary: {
        width: '20vw',
        // borderColor: '#00f464',
        // borderWidth: '5px'
      },
      label: {
        color: '#aeffff',
      }
    },
    // for typed text in forms
    MuiInputBase: {
      input: {
        color: '#78f4dd',
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
    },
    MuiDialog: {
      paperWidthSm: {
        // width: '70vw',
        justifySelf: 'center',
        justifyContent: 'center'
      },
      paperScrollPaper: {
        // justifySelf: 'center',
        // justifyContent: 'center'
      }
    },
    MuiDialogTitle: {
      root: {
        color: '#00c033',
        // justifySelf: 'center',
        // justifyContent: 'center'
      }
    }
  }
});
// theme = responsiveFontSizes(theme);

export default theme
