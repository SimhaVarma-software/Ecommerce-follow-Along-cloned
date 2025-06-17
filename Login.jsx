import React from 'react'

const Login = () => {
    const[loginData,setLoginData]=usestate({
        email:"",
        password:""
    })

function handleInput(e){
    setLoginData(...loginData,[e.target.name]:e.target.value})
}


    function handleLogin(event){
        event.preventDefault();
        if(loginData.email==""){
            alert("Please enter email...");
            return;
        }
        if(loginData.password==""){
            alert("Please enter password...");
            return;
    }
  return (
    <div>
        <form>
            <label htmlFor="">Email</label>
        
        </form>
      
    </div>
  )
}

export default Login
