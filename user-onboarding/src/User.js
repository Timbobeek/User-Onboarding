import React from 'react'

function User({details}) {
  if (!details) {
    return <p>Working fetching your user's details!</p>
  }

  return (
    <div className ='user container'>
      <p>{details.first_name}</p>

    </div>
  )

}

export default User