import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

export default function PrivateRoute({ component: Component, ...rest }) {
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin
    return (
        // If the component exits then we should render the component defined in the app.js compnonent
        <Route {...rest} render={(props) => userInfo ? (<Component {...props} ></Component>) : (<Redirect to="/signin"></Redirect>)} >

        </Route>
    )
}
