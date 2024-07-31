import React from 'react'

const Register = () => {
  return (
    <div>
        <h1>Register</h1>
        <form>
            <label>Атыңыз:</label>
            <input type="text" name="username" />
            <br />
            <label>Сыр сөз:</label>
            <input type="password" name="password" />
            <br />
            <label>Сыр сөздүү кайталоо:</label>
            <input type="password" name="confirmPassword" />
            <br />
            <button type="submit">Каттоо</button>
        </form>
      
    </div>
  )
}

export default Register
