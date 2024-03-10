import React from 'react'

const SuccessNotification = ({orderNumber}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Payment Successful!</h1>
      <p>Your order number is: {orderNumber}</p>
    </div>
  )
}

export default SuccessNotification