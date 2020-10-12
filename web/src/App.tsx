import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState';
import Switcher from './components/Switcher';
import GlobalStyle from'./Styles/globalStyles';
import Routes from './routes';

import light from './Styles/themes/light';
import dark from './Styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Switcher toggleTheme={toggleTheme} />
    <Routes />
    </ThemeProvider>
  );
}

export default App;
