import reset from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Navigation from './router/Navigation';
import { theme } from './theme/theme';

const GlobalStyle = createGlobalStyle`
    ${ reset }

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
    }

    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
`;

const App = () => {
    return (
        <ThemeProvider theme={ theme } >
            <GlobalStyle />
            <Navigation />
        </ThemeProvider>
    );
};

export default App;
