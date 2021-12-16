import React from 'react'

function User({details}) {
  if (!details) {
    return <p>Working fetching your user's details!</p>
  }

  return (
    <div className ='user container'>
      <h2>{details.first_name}</h2>
      <img src={details.avatar} alt={details.first_name} />
      <p>Email: {details.email}</p>
      {/* <p>Password: {details.password}</p>
      <p>Do you agree to the terms of the agreement?: {details.termsAgreement}</p> */}
      {/* logically it seems that password shouldnt show up (private info), where as termsAgreement will always show up as true since ideally all users must agree to it before submitting? */}

    </div>
  )

}

export default User