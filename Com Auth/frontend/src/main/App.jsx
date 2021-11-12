import './App.css'
import './Fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import { AuthProvider } from './auth/auth';





const App = ()  => { return (
<AuthProvider>
<HashRouter>

<div className="">
   <Routes />
</div>

</HashRouter>


</AuthProvider> ) }


export default App;