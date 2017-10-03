import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles/index.css';
import App from './components/App';
import registerServiceWorker from './static/scripts/registerServiceWorker';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
