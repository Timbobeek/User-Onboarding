
import './App.css';
import styled from 'styled-components';

import Form from './Form';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import User from './User';
import schema from './FormSchema';

import * as yup from 'yup';

const StyledApp = styled.div`
color: brown;
background-color: beige;
display: flex;
text-align: center;
flex-direction: column;
`

const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  termsAgreement: false,
}

const initialFormErrors = {
  first_name: '',
  email: ''
}

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        // console.log(response)
        //console.log(response.data.data)  (response.data) did NOT work in this case!!!!
        setUsers(response.data.data)
        // console.log(users)
      }).catch(error => console.error(error))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(response=>{
      // console.log(newUser)
      // console.log(response)   ///make sure to check what you are dealing with (response.data.data did NOT work here)
      setUsers([response.data, ...users]);
    }).catch(error=>console.error(error))
    .finally(()=> setFormValues(initialFormValues));
  }

  // console.log(users);

  const formSubmit = () => {
    //alert('11111');
    const newUser = {
      first_name: formValues.first_name,
      email: formValues.email,
      password: formValues.password,
      termsAgreement: formValues.termsAgreement,
      avatar: 'https://avatars.githubusercontent.com/u/68671029?v=4'  //yes, Ive hardcoded my pretty face to test if it works
    };
    postNewUser(newUser);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    // console.log(name, value)
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  useEffect(() => {
    getUsers()
  }, [])   ///we need useEffect for getUsers to work

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      // console.log('valid:', valid)
      // console.log('disable?:', !valid)
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <StyledApp>
      <h1>Super User Friendly App</h1>
        <Form
        submit={formSubmit}
        values={formValues}
        change={inputChange}
        disabled={disabled}
        errors={formErrors}
        />
        {
          users.map(user => {
            return (
              <User key={user.id}  details={user}/>
            )
          })
        }
    </StyledApp>
    
  );
}

export default App;
