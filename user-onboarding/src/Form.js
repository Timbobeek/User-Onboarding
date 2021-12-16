import React from 'react';
import styled from 'styled-components';



export default function Form (props) {
  

  const{values, submit, change} = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const {name, value} = evt.target
    change(name, value)
  }

  return(
    <form className = 'form container' onSubmit={onSubmit}>
      <div className='form submit'>
        <h2>Add a user</h2>
        <button>SUBMIT</button>
      </div>

      <div className = 'form inputs'>
        <h3>User Info</h3>
        <label> NAME----->
          <input
            value={values.first_name}
            onChange={onChange}
            name='first_name'
            type='text'
          />
        </label>

      </div>



    </form>

  )
}