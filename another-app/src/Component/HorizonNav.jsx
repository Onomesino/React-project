import React from 'react'

function HorizonNav() {
  return (
    <>
        <nav className="Nav navbar navbar-default navbar-fixed-top ">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">E.G Ventures</a>
                    <img className="log" src="images/clothing.png" alt="logo" />
                </div>
      
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">About</a></li>
                </ul>
          </div>
      </nav>
    </>
  )
}

export default HorizonNav