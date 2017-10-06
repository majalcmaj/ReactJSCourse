import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Firebase from './helpers/Firebase';
import AuthHelper from "./helpers/Auth";

import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import './static/styles/index.css';
import reducers from './reducers';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import RootLayout from './components/RootLayout'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class AppComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {rootElement: AppComponent.getLoadingRootElement()}

        const authHelper = new AuthHelper(Firebase);


        authHelper.onAuthStateChange(user => {
            if (user) {
                this.setState({rootElement: AppComponent.getSignedInRootElement()});
            } else {
                this.setState({rootElement: AppComponent.getNotSignedInRootElement()});
            }
        });
    }

    static getSignedInRootElement() {
        return (
            <RootLayout>
                <BrowserRouter>
                    <Switch>
                        <Route component={BrowserRouter}>
                            <Route path='/posts/new' component={PostsNew}/>
                            <Route path='/' component={PostsIndex}/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </RootLayout>
        );
    }

    static getNotSignedInRootElement() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/signup' component={SignUp}/>
                    <Route path='/' component={SignIn}/>
                </Switch>
            </BrowserRouter>
        );
    }

    static getLoadingRootElement() {
        return <div>Loading...</div>
    }

    render() {
        return this.state.rootElement;
    }

}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <AppComponent/>
    </Provider>
    , document.getElementById('root'));
