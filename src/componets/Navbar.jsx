import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =()=>{


    const styles = {
      color : 'white',
      fontWeight :'700'
     }
    return (
      <div>
    <nav className="navbar bg-dark fixed-top border-bottom border-body navbar-expand-lg" style={{backgroundColor:'rgb(41,51,63)'}} data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src='apple-touch-icon.png' alt="" style={{height:'30px'}}/><span style={{color:'aqua'}}> News Express</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " style={{borderColor:'white'}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={styles}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/business" style={styles}>Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="/sports" style={styles}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="/health" style={styles}>Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science" style={styles}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment" style={styles}>Entertainment</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
}

export default Navbar
