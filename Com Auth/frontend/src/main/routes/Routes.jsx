import React, {useContext} from 'react'
import AuthContext from '../auth/auth';
import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';



const Routes = () => {
    const {signed} = useContext(AuthContext);

    return signed ? <OtherRoutes/> : <SignRoutes/>;
}

export default Routes;
