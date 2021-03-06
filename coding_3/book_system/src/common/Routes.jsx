import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import AddBooks from '../components/AddBooks';
import AddCategory from '../components/AddCategory';
import Dashboard from '../components/Dashboard';
import EditData from '../components/EditData';

const Routes =(props)=>{
    return(
        <>
            <Switch />
                <Route exact path="/" exact render={(props)=><Home {...props} /> } />
                <Route exact path="/login" exact render={(props)=><Login {...props} /> } />
                <Route exact path="/signup" exact render={(props)=><Signup {...props} /> } />
                {/* <Route exact path="/add-books" exact render={(props)=><AddBooks {...props} /> } /> */}
                <Route exact path="/dashboard/add-books" exact render={(props)=><Dashboard {...props} /> } />
                <Route exact path="/add-category" exact render={(props)=><AddCategory {...props} /> } />
                <Route exact path="/edit:id" exact render={(props)=><EditData {...props} /> } />
            <Switch />
        </>
    )
}

export default Routes;