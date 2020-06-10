import {createStore} from "redux";
import {reducer} from "../reducer/weather-reducer";

export const store = createStore(reducer);