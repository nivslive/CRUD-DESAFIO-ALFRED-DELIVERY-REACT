import React from 'react'
import {useAuth} from '../../../main/auth/auth'

const Login = () => {
    const { signed, Login} = useAuth();
    console.log(signed);

async function handleLogin() {
    await Login({
        username: 'test',
        password: '123456',
    })
}
    


return (
<div>
    <button className="btn float-right login_btn" onClick={handleLogin}>Login</button>
</div>
)}

export default Login;