// theme.ts
import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles/createTheme';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1A365D', // Customize your primary color
    },
    secondary: {
      main: '#FFDC00', // Customize your secondary color
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
