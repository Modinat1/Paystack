import React from 'react'
import showcaseImg from '../images/showcaseImg.png'

const Showcase = () => {
  return (
   <>
   <section className='showcase'>

    <div className='showcase_text'>
   <h1>Payment Made Easy with EasyPay</h1>
   <p>EasyPay allows for swift payment and showcase of your transaction histories</p>
    </div>

    <div className='showcaseImg_div'>
   <img src={showcaseImg} alt="illutratiom image" />
   </div>
   </section>
   </>
  )
}

export default Showcase