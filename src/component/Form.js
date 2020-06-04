import React from 'react';
import './../App.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "@material-ui/core/ListItem/ListItem";
import {connect} from "react-redux";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {city: '',weather:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({city: event.target.value});
    }

    handleSubmit(event) {
       console.log(this.state.city)
       this.setWeather(this.state.city)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.props.onGetWeather}>
                   <h1> Enter your city</h1>
                    <div className='App-text-field'>
                        <TextField
                            id="city"
                            size="medium"
                            placeholder="City"
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='App-button'>
                        <Button id="getWeatherButton" type="submit" variant="contained" color="primary" size="large" className={classes.button}>
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
                "http://localhost:8181/cxf/weather/city/"+city);
            const data = await apiCall.json();
            if (data.cod !== "404") {
                dispatch({type: "weatherChange", data: data})
            } else {
                dispatch({type: "error", data: data})
            }
        }
    })
)(Form);
