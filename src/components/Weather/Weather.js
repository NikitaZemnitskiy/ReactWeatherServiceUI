import React from "react";
import {connect} from "react-redux";
import "./weather.css"

class Weather extends React.Component {

    render() {
        return (
            <div className="App-weather">
                {Object.keys(this.props.store).map((point) =>
                    <div>
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
)(Weather);
