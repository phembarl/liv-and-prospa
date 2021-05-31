import { ThemeProvider, Global } from '@emotion/react';
import { theme } from './theme';
import { globalStyles } from './theme/global';
import Routes from './routes';
import './theme/BR-firma-webfont/fonts.css';
import 'react-responsive-modal/styles.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <Routes />
        </ThemeProvider>
    );
}

export default App;
