import React, { Component } from 'react';
import NotFoundError from './Components/UI/ErrorPages/NotFoundError'
import ServerError from './Components/UI/ErrorPages/ServerError'
import { Route, Switch  } from 'react-router-dom'
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

// componet import
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Logout from './Components/Pages/Logout/Logout';

class App extends Component {
  render() {
    return (
        <AuthContextPRovider>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/books" exact  component={Allbooks} />
            <Route path="/book/:id" component={ViewBook} />
            <Route path="/signup" exact component={SignUp} />
            <ProtectedRoute path="/uploadbook" exact component={UploadBook}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/requestbook" exact component={RequestPage}/>
            <Route path="/categories" exact component={Category}/>
            <Route path="/library/:id" exact component={Library} />
            <Route path="/requests" exact component={RequestedBooks} />
            <Route path="/logout" component={Logout} />
            <Route component={NotFoundError}/>
          </Switch>
        </AuthContextPRovider> 
    ) 
  }
}

export default App;
