import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import configureStore from './store/configureStore';
import GlobalStyles from './styles/GlobalStyles';
import history from './utils/history';
import theme from './styles/theme';
import AppRouter from './router';

import 'antd/dist/antd.css';
import './utils/window';

const initialState = {};
const store = configureStore(initialState, history);

if (document.getElementById('root')) {
    ReactDOM.render(
        <React.StrictMode>
             <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Router history={history}>
                        <AppRouter />
                    </Router>
                </ThemeProvider>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}