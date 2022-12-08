import React from "react";
import {valEmail} from "../utils/helpers";

function Contact () {
  const [name, setName] = React.useState("");

    const [errorMessage, setErrorMessage] = React.useState('');
    const [ message, setMessage] = React.useState('');

   const handleSubmit = (e) => {
        // e.preventDefault();
      if (e.target.name === 'email') {
         const isValid = validateEmail(e.target.value);
         console.log(isValid);
         if (!isValid) {
            setErrorMessage('Your email is invalid.');
         } else {
            setErrorMessage('');
         }
      } else {
         if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
         } else {
            setErrorMessage('');
         }
      }
      if (!errorMessage) {
         setName({ ...name, [e.target.name]: e.target.value });
      };
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        setMessage('Form submitted');
    }
    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" defaultValue={name.name} onBlur={handleSubmit} />
                <input type="text" name="email" defaultValue={name.email} onBlur={handleSubmit} />
                <input type="text" name="message" defaultValue={name.message} onBlur={handleSubmit} />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
