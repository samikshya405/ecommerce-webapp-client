import React from 'react'

const SuccessNotification = ({orderNumber}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Payment Successful!</h2>
      <p>Your order number is: {orderNumber}</p>
    </div>
  )
}

export default SuccessNotification