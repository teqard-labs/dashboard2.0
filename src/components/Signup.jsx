import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { signupFields } from "./Fields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

const Signup = () => {
    const navigate = useNavigate();
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => {
      console.log('Input changed:', e.target.id, e.target.value);
      setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState);
        createAccount();
    }

    // Handle Signup API Integration and Firebase authentication here
    const createAccount = async () => {
      const email = signupState.email;
      const password = signupState.password;
  
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          // Signed in
          const user = userCredential.user;
          console.log("User created successfully:", user);
          navigate('/login');
      } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error creating user:", errorCode, errorMessage);
      }
  }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
                <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>
        </form>
    )
}

export default Signup;
