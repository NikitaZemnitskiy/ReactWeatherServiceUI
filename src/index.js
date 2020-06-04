import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {Provider} from "react-redux";
import {createStore} from "redux";

const reducer = (state = '', action) => {
    if (action.type === 'weatherChange') {
        return {
            "Location": action.data.name,
            "Temperature": action.data.main.temp + " ℃",
            "Minimum temperature": action.data.main.temp_min + " ℃",
            "Maximum temperature": action.data.main.temp_max + " ℃",
            "Pressure": action.data.main.pressure,
            "Humidity": action.data.main.humidity,
            "Visibility": action.data.visibility,
        }
    } else if (action.type === "error") {
        return {"We can't give you the weather ": action.data.message}
    } else {
        return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
