import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Form from "./components/form/form";
import Weather from "./components/weather/weather-list";

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <div className='App-content'>
                    <Form/>
                    <Weather/>
                </div>
            </div>
        );
    };
}

export default App;
