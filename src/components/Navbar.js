import Logo from '../images/logo.jpg'

export default function Navbar() {

  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a href="#"><img src={Logo} alt="Midleout" className="img-fluid logo"/></a>
          </div>
        </div>
      </div>
    </nav>
  )
}