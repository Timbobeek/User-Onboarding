import React from 'react'

function User({details}) {
  if (!details) {
    return <p>Working fetching your user's details!</p>
  }

  return (
    <div className ='user container'>
      <h2>{details.first_name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Do you agree to the terms of the agreement?: {details.termsAgreement}</p>

    </div>
  )

}

export default User