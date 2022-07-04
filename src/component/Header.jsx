import { NavLink } from "react-router-dom"

function Header({text, textColor, bgColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }  

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
            <div className="menu">
              <NavLink to={{
                pathname: '/'
              }}>
                Home
              </NavLink>
              <NavLink to={{
                pathname: '/about'
              }}>
                About
              </NavLink>
            </div>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a85'
}

export default Header