import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import paymentImg from '../images/paymentImg.png'
import './Payment.css'

const Payment = () => {

    const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")

  const paystackPayment = (e) => {
    e.preventDefault()
    const payment = new PaystackPop()
    payment.newTransaction({
      key: "pk_test_b298d476e79aa55787cdc691ef704bac014c6524",
      name,
      email,
      amount: amount * 100,
      onSuccess(transaction){
        let message = `Payment Successful!!! Your Reference ID is ${transaction.reference}`
        alert(message)
      setAmount("")
      setName("")
      setEmail("")
      },
      onCancel(){
        alert('Transaction Canceled')
        setAmount("")
      setName("")
      setEmail("")
      }
    })
  }
  return (
    <React.Fragment>
     <div className="form_container" id="payment">

        <div className='paymentImg_container'>
        <img src={paymentImg} alt="illustration" />
        </div>

         <form className="payment_form">
        <h3 className="heading">MAKE PAYMENT</h3>
             <div className='form-group'>
                 <label htmlFor="name">Name</label>
                 <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='enter name'/>
             </div>

             <div className='form-group'>
                 <label htmlFor="email">Email</label>
                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' />
             </div>

             <div className='form-group'>
                 <label htmlFor="amount">Amount</label>
                 <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='amount' />
            </div>

             <button className="payment_btn" onClick={paystackPayment}> MAKE PAY </button>
        </form>

</div>
    </React.Fragment>
  )
}

export default Payment

