
import './App.css';
import styled from 'styled-components';

import Form from './Form';
import React, {useState, useEffect} from 'react';

const StyledApp = styled.div`
color: red;
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
