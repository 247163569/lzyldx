import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/home/index'
import User from '../pages/user/index'
import Mine from '../pages/mine/index'
import Hook from '../pages/hook/index'

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact render={()=>(
                    <Redirect to='/home'/>
                )}/>
                <Route path='/home' component={ Home }/>
                <Route path='/user' component={ User }/>
                <Route path='/mine' component={ Mine }/>
                <Route path='/hook' component={ Hook }/>
            </Switch>
        )
    }
}

export default Router