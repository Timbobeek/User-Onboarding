
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
  const [users, setUsers] = useState();

  const [formValues, setFormValues] = useState(initialFormValues);

  const formSubmit = () => {
    
    const newUser = {
      name: 'vasya',
      email: 'vasya@yandex.ru',
      password: 'vasyag1999jsx',
      termsAgreement: true,
    }
  }
  













  return (
    <StyledApp>
      <h1>Super User Friendly App</h1>
        <Form
        values={formValues}
        />
    </StyledApp>
    
  );
}

export default App;
