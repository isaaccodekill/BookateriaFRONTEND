import React, { Component } from 'react';
import NotFoundError from './Components/UI/ErrorPages/NotFoundError'
import ServerError from './Components/UI/ErrorPages/ServerError'
import {  Router, Route, Switch  } from 'react-router-dom'
import NavContextProvider from './Contexts/NavContext'

// page imports
import Allbooks from './Components/Pages/AllBooks/AllBooks'
import ViewBook from './Components/Pages/ViewBook/ViewBook'
import SignUp from './Components/Pages/SignUp/SignUp'
import UploadBook from './Components/Pages/UploadBook/UploadBook'
import Homepage from './Components/Pages/Homepage/Homepage'



class App extends Component {
  render() {
    return (
    	<NavContextProvider>
    		<Switch>
        <Route path="/" exact component={Homepage}/>
				<Route path="/books" exact  component={Allbooks} />
        <Route path="/book/:id" component={ViewBook} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/uploadbook" exact component={UploadBook}/>
				<Route component={NotFoundError}/>
			</Switch>
    	</NavContextProvider>
    ) 
  }
}

export default App;
