import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { loginFields } from "./Fields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const mapErrorCodeToCustomMessage = (errorCode) => {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'The email address you entered is not valid. Please try again.';
        case 'auth/user-disabled':
            return 'This user account has been disabled. Please contact support.';
        case 'auth/user-not-found':
            return 'There is no user with the email address you entered. Please try again.';
        case 'auth/wrong-password':
            return 'The password you entered is incorrect. Please try again.';
        default:
            return 'An error occurred. Please try again.';
    }
}

export default function Login() {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState(fieldsState);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    const authenticateUser = async () => {
        const email = loginState.email;
        const password = loginState.password;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Signed in
            const user = userCredential.user;
            console.log("User signed in successfully:", user);
            navigate('/dashboard');
        } catch (error) {
            const errorCode = error.code;
            const customErrorMessage = mapErrorCodeToCustomMessage(errorCode);
            console.error("Error signing in user:", errorCode, customErrorMessage);
            setErrorMessage(customErrorMessage);
        }
    } 

    return (
        <>
            {errorMessage && (
                <div className="error-message -mt-5 relative text-red-700 font-normal border-2 text-sm border-red-500 rounded-md bg-red-50">
                    <p className="mx-2 my-2">{errorMessage}</p>
                </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="-space-y-px">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
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
                </div>

                <FormExtra />
                <FormAction handleSubmit={handleSubmit} text="Login" />

            </form>
        </>
    )
}
