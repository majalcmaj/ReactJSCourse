import * as React from "react";
import * as ReactDom from "react-dom";
import * as Redux from "redux";

import App from "./components/App";
import {Provider} from "react-redux";
import reducers from "./reducers";

const createStoreWithMiddleware = Redux.applyMiddleware()(Redux.createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>,
    document.getElementById("example")
);