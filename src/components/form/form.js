import React from 'react';
import '../../App.css';
import '../../redux/action/action-creator';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "@material-ui/core/ListItem/ListItem";
import {connect} from "react-redux";
import './form.css'
import {WEATHER_CHANGE, WEATHER_ERROR} from "../../redux/action/action-creator";

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.onGetWeather}>
                <h1>Enter your city</h1>
                <div className='App-text-field'>
                    <TextField
                        id="city"
                        size="medium"
                        placeholder="City"
                    />
                </div>
                <div className='App-button'>
                    <Button id="getWeatherButton" type="submit" variant="contained" color="primary" size="large"
                            className={classes.button}>
                        Get Weather
                    </Button>
                </div>

            </form>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onGetWeather: async (e) => {
            e.preventDefault();
            const city = e.target.elements.city.value;
            const apiCall = await fetch(
                "http://localhost:8181/cxf/weather/city/" + city);
            const data = await apiCall.json();
            if (data.cod !== "404") {
                dispatch(WEATHER_CHANGE(data))
            } else {
                dispatch(WEATHER_ERROR(data))
            }
        }
    })
)(Form);
