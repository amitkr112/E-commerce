import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
// Link is not default export of react router dom .its named export
// and named export should be wrapped inside curly bracket
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function SigninScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // AFTER SIGNIN WE WANT THE USER TO REDIRECT IT TO SHIPPING SCREEN
    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';
    // console.log("HI " + redirect)
    console.log(props)
    console.log("HI " + props.location)
    console.log(redirect)
    console.log(props.location.search)
    console.log(props.history)

    // console.log("BI " + props.location.search)
    // console.log("TI " + props.location.search.split('='))
    // AFTER DISPATCHING SIGNIN ACTION USER INFO WILL BE FAILED HENCE WE ARE GETTING THE USER INFO
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo, loading, error } = userSignin

    const dispatch = useDispatch()
    const submitHandler = (e) => {
        // Prevents from refreshing the page
        e.preventDefault();
        // SIGNIN ACTION
        dispatch(signin(email, password))
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    {/* / for in html = htmlFor in react  */}
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" placeholder="Enter your email" required
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>

                <div>
                    {/* / for in html = htmlFor in react  */}
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required
                        // e refers to event
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New customer?{' '}
                        <Link to={`/register?redirect=${redirect}`}>
                            Create your account
                        </Link>
                    </div>
                </div>

            </form>
        </div>
    )
}
