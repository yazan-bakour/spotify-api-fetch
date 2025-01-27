import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { store } from './store';
import { Provider } from 'react-redux';
import CoreLayout from './common/layouts/CoreLayout';
import { ThemeProvider } from '@timechimp/tacugama';
import './styles/_main.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
          <Routes />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
