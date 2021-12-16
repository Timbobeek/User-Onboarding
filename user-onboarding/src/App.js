
import './App.css';
import styled from 'styled-components';

import Form from './Form';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const StyledApp = styled.div`
color: brown;
background-color: beige;
display: flex;
text-align: center;
flex-direction: column;
`

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsAgreement: false,
}

const initialUsers = [];


function App() {
  const [users, setUsers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        //console.log(response.data)
        setUsers(response.data)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])   ///we need useEffect for getUsers to work


  const formSubmit = () => {
    //alert('11111');
    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      termsAgreement: true,
    };
  }

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }
  
  return (
    <StyledApp>
      <h1>Super User Friendly App</h1>
        <Form
        submit={formSubmit}
        values={formValues}
        change={inputChange}
        />
    </StyledApp>
    
  );
}

export default App;
