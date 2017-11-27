import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Header />
    </MuiThemeProvider>,
    document.getElementById('header')
);

ReactDOM.render(
    <MuiThemeProvider>
        <Footer />
    </MuiThemeProvider>,
    document.getElementById('footer')
);

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
