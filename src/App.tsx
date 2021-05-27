import { ThemeProvider, Global } from '@emotion/react';
import { theme } from './theme';
import { globalStyles } from './theme/global';
import './theme/BR-firma-webfont/fonts.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <div className="App">
                <h1>Liv & Prospa</h1>
            </div>
        </ThemeProvider>
    );
}

export default App;
