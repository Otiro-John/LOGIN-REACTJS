
import './Login.css'
const Login = () => {
  return (
    <div className="login-container">
      <div className="title">LOGIN-GEMS</div>
      <div className="input-fields">
        <input type="text" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
      </div>
      <div className="submit"><a href="#">Submit</a></div>
    </div>
  )
}

export default Login