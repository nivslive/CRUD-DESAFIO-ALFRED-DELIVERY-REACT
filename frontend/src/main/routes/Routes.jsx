import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Login from '../../components/login/Login'
import Home from '../../components/home/Home'
import UserCrud from '../../components/user/User'
import Maintenance from '../../components/maintenance/Maintenance';

export default props => 
<Switch>
<Route exact path='/' component={Login} />
<Route exact path='/login' component={Login} />
 <Route exact path='/home' component={Home} />
 <Route  path='/users' component={UserCrud} />
 <Route  path='/maintenance' component={Maintenance} />
 <Redirect from='*' to='/' />
</Switch>