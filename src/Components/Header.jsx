import React from 'react'
import { useUserContext } from '../ContextProvider';

function Header() {

  // const userContext = useUserContext();


  // if (!userContext) {
  //   return <div>Loading...</div>; 
  // }

  
  // const { cardQuantity,cardAmount } = userContext;


  // const quantity = cardQuantity || 0;
  // const amount = cardAmount || 0;
   const { cardQuantity, cardAmount }  = useUserContext();
  return (
  <>
  <header>
  <div className="row bg-light d-flex justify-content-center text-align-center p-3">
    <div className='col-3'><b>TOTAL QTY : {cardQuantity}</b> </div>
    <div className='col-3'><b>TOTAL PRICE : {cardAmount.toFixed(2) } </b> </div>
    
    <div className='col-auto'>
    <button type="button" className="btn btn-primary">Proceed to Pay</button>
    </div>
    </div>
  </header>
  </>
  )
}

export default Header
