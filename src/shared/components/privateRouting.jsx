import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authUser } from '../services/authService';

const PrivateRouting = ({ component: Component, ...params }) => (
    <Route {...params} render={ props => (
        authUser()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
    )}>

    </Route>
)

export default PrivateRouting;