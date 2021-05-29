import { ThemeProvider, Global } from '@emotion/react';
import { theme } from './theme';
import { globalStyles } from './theme/global';
import './theme/BR-firma-webfont/fonts.css';
import Routes from './routes';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <Routes />
        </ThemeProvider>
    );
}

export default App;
