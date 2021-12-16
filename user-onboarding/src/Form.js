import React from 'react';
import styled from 'styled-components';



export default function Form (props) {
  
  // return <p>some text inside Form component</p>;

  const{values,submit} = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return(
    <form className = 'form container' onSubmit={onSubmit}>
      <div className='form submit'>
        <h2>Add a user</h2>
        <button>SUBMIT</button>
      </div>

      <div classname = 'form inputs'>
        <h3>User Info</h3>
        <label>
          <input
            value={values.name}
            name='name'
          />
        </label>

      </div>



    </form>

  )
}