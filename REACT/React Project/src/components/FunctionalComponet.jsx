import React from 'react'
import "../styles/FunctionalComponent.css"

const FunctionalComponent = () => {
  return (
    <>
    <form action="login">
      <h4>Functional Component</h4>
      <h5>Registeration form</h5>
      <input type="text" placeholder='enter your name' /><br />
      <input type="text" placeholder='enter your email' /><br />
      <input type="text" placeholder='enter your password' />
      <h5>Already have an account? Login</h5>
      <button type='submit'>submit</button>

    </form>
     
      </>
  )
}

export default FunctionalComponent


// it is same as js function.
// it is simple clean and fast.
// it uses hooks(useState) and (useeffect).

// functional components are js functions that return jsx.