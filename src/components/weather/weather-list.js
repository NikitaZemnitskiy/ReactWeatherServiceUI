import React from "react";
import {connect} from "react-redux";
import "./weather-list.css"

class WeatherList extends React.Component {

    render() {
        return (
            <div className="App-weather">
                {Object.keys(this.props.store).map((point) =>
                    <div key={point}>
                        {point} : {this.props.store[point]}
                    </div>
                )}
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
)(WeatherList);
