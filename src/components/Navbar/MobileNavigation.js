import React from 'react'
import NavLinks from './NavLinks'

const MobileNavigation = (props) => {
  const {showBurger, setShowBurger} = props

  const openBurger = () => {
    setShowBurger(!showBurger)
  }
  return (
    <section className='mobile_nav'>
      {showBurger ? <NavLinks/> : null }
    
     <button className='burger' onClick={() => openBurger()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </section>
  )
}

export default MobileNavigation