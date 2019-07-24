import React, { Component } from 'react';
import NotFoundError from './Components/UI/ErrorPages/NotFoundError'
import ServerError from './Components/UI/ErrorPages/ServerError'

class App extends Component {
  render() {
    return (
        < NotFoundError />
    ) 
  }
}

export default App;
