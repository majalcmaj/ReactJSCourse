import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import App from './components/App';
import SignIn from './components/auth/SignIn';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <App>
                    <Route path="/SignIn" component={SignIn}/>
                </App>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
