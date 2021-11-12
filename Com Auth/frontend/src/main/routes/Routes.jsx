import React, {useContext} from 'react'
import AuthContext from '../auth/auth';
import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';



const Routes = () => {
    const {signed} = useContext(AuthContext);

    return signed ? <OtherRoutes/> : <SignRoutes/>;
}

export default Routes;

/**import { Switch, Route, Redirect } from 'react-router'

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
            </Switch> **/