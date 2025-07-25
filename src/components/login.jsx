import React, { useState }  from 'react'

const Login = () => {
  const [isLoginMode, setIsLOginMode] = useState(true)
  return (
    <div>
      {/* Header title*/}
        <div>
          <h2> {isLoginMode ? "Login" : "Sign Up"}</h2>
        </div>

      <h1 className='text-red-500 underline'>Login </h1>
    </div>
  )
}

export default Login