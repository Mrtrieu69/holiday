import React from "react";
import ReactDom from "react-dom"
import { BrowserRouter as Router} from "react-router-dom"
import { Provider } from "react-redux"

import store from "./app/store"
import App from "./App"
import "./grid.css"
import "./index.css"


ReactDom.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
)