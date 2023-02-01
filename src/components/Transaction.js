import React from 'react'
import './Transaction.css'

const Transaction = (props) => {
    const {transactionData, fetch, setFetch} = props
  return (
    <section className="transaction_section" id="transaction">
        <h3 className='transaction_subheading'>Transaction History</h3>
        <p>EasyPay let's you view your previous transactions</p>
        <button className='fetch' onClick={() => setFetch(!fetch)}>View</button>
		{fetch ? (
		
        transactionData.map((transaction, index) => {
					const {
						amount,
						customer: { first_name, last_name, email },
						status,
						reference,
					} = transaction;
					return (
					<section className="transaction_section">
						<ul key={index}>
							<li className="transaction_list">
								<h3 className="customer_name">Name Of Customer: {first_name} {last_name} </h3>
								<p>{email}</p>
								<div className="flex">
									<h4>Transaction Status: {status}</h4> 
									<h4>Amount: {amount}</h4>
								</div>
								<p>Refrence ID: {reference}</p>
							</li>
							
		
						</ul>
						</section>
					); 
				})
			) : null}
	</section>
  )
}

export default Transaction