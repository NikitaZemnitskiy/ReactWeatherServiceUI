import React from 'react';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";


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
