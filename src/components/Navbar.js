import React from 'react'

const Navbar = () => {
  return (
    <React.Fragment>
        <header>
            <nav>
                <h3>EasyPay</h3>
                <ul>
                    <li className='bg'><a href="#payment">Pay</a></li>
                    <li className='border'><a href="#transaction">Transactions</a></li>
                </ul>
            </nav>
        </header>
    </React.Fragment>
  )
}

export default Navbar