import React from 'react'
import LargerScreenNav from './LargerScreenNav'
import MobileNavigation from './MobileNavigation'


const Navbar = (props) => {
  const {showBurger, setShowBurger} = props
  return (
    <React.Fragment>
        <header>
            <nav>
              <h3>EasyPay</h3>
              <LargerScreenNav/>
              <MobileNavigation showBurger={showBurger} setShowBurger={setShowBurger}/>
            </nav>
        </header>
    </React.Fragment>
  )
}

export default Navbar