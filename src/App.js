import React, { Component } from 'react';
import NotFoundError from './Components/UI/ErrorPages/NotFoundError'
import ServerError from './Components/UI/ErrorPages/ServerError'
import {  Router, Route, Switch  } from 'react-router-dom'
import Allbooks from './Components/Pages/AllBooks/AllBooks'
import NavContextProvider from './Contexts/NavContext'

class App extends Component {
  render() {
    return (
    	<NavContextProvider>
    		<Switch>
				<Route path="/books" exact  component={Allbooks} />
				<Route component={NotFoundError} />
			</Switch>
    	</NavContextProvider>
    ) 
  }
}

export default App;
