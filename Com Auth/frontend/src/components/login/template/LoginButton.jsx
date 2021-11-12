import React from 'react'
import {useAuth} from '../../../main/auth/auth'

/** Não funcionou. =( */
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
    <input type="submit" className="btn float-right login_btn" onClick={handleLogin}/>
</div>
)}

export default Login;