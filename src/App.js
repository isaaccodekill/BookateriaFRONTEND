import React, { Component } from 'react';
import NotFoundError from './Components/UI/ErrorPages/NotFoundError'
import ServerError from './Components/UI/ErrorPages/ServerError'
import {  Router, Route, Switch  } from 'react-router-dom'
import NavContextProvider from './Contexts/NavContext'
import AuthContextPRovider from './Contexts/AuthContext'

// page imports
import Allbooks from './Components/Pages/AllBooks/AllBooks'
import ViewBook from './Components/Pages/ViewBook/ViewBook'
import SignUp from './Components/Pages/SignUp/SignUp'
import UploadBook from './Components/Pages/UploadBook/UploadBook'
import Homepage from './Components/Pages/Homepage/Homepage'
import Login from './Components/Pages/Login/Login'
import RequestPage from './Components/Pages/RequestPage/RequestPage'
import Category from './Components/Pages/Categories/Categories'
import Library from './Components/Pages/Library/Library'
import RequestedBooks from './Components/Pages/RequestedBooks/RequestedBook'

class App extends Component {
  render() {
    return (
    	<NavContextProvider>
        <AuthContextPRovider>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/books" exact  component={Allbooks} />
            <Route path="/book/:id" component={ViewBook} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/uploadbook" exact component={UploadBook}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/requestbook" exact component={RequestPage}/>
            <Route path="/categories" exact component={Category}/>
            <Route path="/library/:id" exact component={Library} />
            <Route path="/requests" exact component={RequestedBooks} />
            <Route component={NotFoundError}/>
          </Switch>
        </AuthContextPRovider> 
    	</NavContextProvider>
    ) 
  }
}

export default App;
