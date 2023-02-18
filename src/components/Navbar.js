import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {     // we passes props to get the information when calling the function
    return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="/" >Navbar</a> */}
                        <a className="navbar-brand" href="/" >{props.title}</a>  
                        {/* <Link className="navbar-brand" to="/" >{props.title}</Link>   */}
                         {/* we can pass props like this and then we will pass props value when we call component in app.js */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="\" >Home</a>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                                </li> */}
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/About">{props.about}</Link>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="/About">{props.about}</a>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="mx-3 form-check form-switch">
                            <input style={{accentColor:"green"}} onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="Green" />
                            <label style={{fontSize:"14px"}} className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="Green">Green Dark Mode</label>
                        </div> */}
                        <div className="form-check form-switch mx-3">
                            <input style={{cursor:"pointer"}} onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label style={{fontSize:"14px", cursor:"pointer"}} className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Blue Dark Mode</label>
                        </div>
                    </div>
                     
                   
                </nav>
            </div>
        
    )
}
Navbar.propTypes = {    //we passes propTypes to specify the types of props given to the fields in functions        and if any field of propTypes object has isRequired property then it will show error when defaultProps are not used.
    title: PropTypes.string,
    // title: PropTypes.string.isRequired,
    about: PropTypes.string
}
Navbar.defaultProps = {    //if we donot given any props value on function calling the default values will be there
    title: "Set Title",
    about: "set About"
}