import React, { useState } from 'react'
import '../Login/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth , db} from '../Firebase/firebase'
import { useStateValue } from "../../StateProvider";


function Signup() {
    const [{ basket , user},dispatch] = useStateValue();
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [erorr, setErorr] = useState('')
  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      return db.collection('users').doc(Credential.user.UID).set({
        phone:phone,
        userName:userName
      })
      .then((auth) => {
        console.log(auth)
        if (auth) {
          navigate('/')
        }
      })
      .catch((error) => setErorr(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <span className="errorMessage">{erorr}</span>
        <form>
          <h5>User Name</h5>
          <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        <h5>phone</h5>
        <input
          type="text"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />
         
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton1" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Signup
