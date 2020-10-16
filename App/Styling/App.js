import { createMuiTheme } from '@material-ui/core/styles';
import '../../public/fonts.css'

const theme = createMuiTheme({
  typography: {
    fontFamily:
    "Piazzolla"
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face':
  //         '"Piazzolla"'
  //     },
  //   },
  // },
});

export default theme
