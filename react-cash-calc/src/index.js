import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import './static/styles/index.css';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path='/posts/new' component={PostsNew}/>
                <Route path='/' component={PostsIndex}/>
            </Switch>
        </BrowserRouter>
    </Provider>
        , document.getElementById('root'));
