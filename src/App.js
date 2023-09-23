import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"});
  const [validationStates,setValidationStates] = useState({emailState: false, passwordState: false});

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})



  });
 
  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    const passwordRegex = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/gm;
    if(e.target.value.length >= 9 && e.target.value.match(passwordRegex)){
      setValidationStates({...validationStates, passwordState: true});
    }else{
      setValidationStates({...validationStates, passwordState: false});
    }
    
  });
 
  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });

  const clickSubmit = ((e) => {
    //Call fetch
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formValues.email);
    if (isEmailValid) {
        setValidationStates({...validationStates, emailState: true});
        //alert("Email is valid");
    }else{
      setValidationStates({...validationStates, emailState: false});
      //alert("Email is not valid");
    }

    //setValidationStates({...validationStates, emailState: isEmailValid});
    //alert(JSON.stringify(formValues))
  })

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
     
      <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} isInvalid={!(validationStates.emailState)}/>
        { !validationStates.emailState && <Form.Text className="text-muted" type= "invalid" >We'll never share your email with anyone else.</Form.Text>}
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isValid={validationStates.passwordState} isInvalid={!validationStates.passwordState}/>
        { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Favorite Class</Form.Label>
        <Form.Select onChange={handleSelectChange}>
          <option value="1">ISIS3710</option>
          <option value="2">Programación con tecnologias web</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={clickSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;
