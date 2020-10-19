import { createMuiTheme } from '@material-ui/core/styles';
import '../../public/fonts.css'
import button11 from '../../public/images/button11.png'

const theme = createMuiTheme({
  typography: {
    fontFamily: "Piazzolla",
    fontSize: 19,
    button: {
      backgroundImage: 'url(' + button11 + ')',
      'background-repeat': 'no-repeat',
      // 'background-attachment': 'fixed',
      'background-position': 'center',
      'background-size': 'cover'
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
  },
});

export default theme
