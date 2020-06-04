import React from 'react';
import './App.css';
import Header from "./component/Header";
import Form from "./component/Form";
import Weather from "./component/Weather";


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
