import logo from '../assets/img/logoTwitch.png'

export const Logo = ({text}) => {
  return (
    <div className="auth-form-logo-container">
        <img src={logo} alt="Logo Twitch"/>
        <span>{text}</span>
    </div>
  )
}