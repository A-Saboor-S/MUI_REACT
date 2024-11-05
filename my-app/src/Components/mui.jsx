import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Mui = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [firstNameErr, setFirstNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [ageErr, setAgeErr] = useState(false);

    const signUpFormHandler = (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate First Name (only letters allowed)
        const namePattern = /^[A-Za-z]+$/; // Only letters
        if (!namePattern.test(firstName)) {
            setFirstNameErr(true);
            isValid = false;
        } else {
            setFirstNameErr(false);
        }

        // Validate Email (must end with @gmail.com)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
        if (!emailPattern.test(email) || !email.endsWith('@gmail.com')) {
            setEmailErr(true);
            isValid = false;
        } else {
            setEmailErr(false);
        }

        // Validate Age
        if (age === "" || isNaN(age) || age < 0) {
            setAgeErr(true);
            isValid = false;
        } else {
            setAgeErr(false);
        }

        if (isValid) {
            console.log("Form Submitted:", { firstName, email, age });
            alert("Form submitted successfully!");
            // Clear form fields for reuse
            setFirstName('');
            setEmail('');
            setAge('');
        }
    };

    useEffect(() => {
        if (firstName !== "") {
            setFirstNameErr(false);
        }
    }, [firstName]);

    useEffect(() => {
        if (email !== "") {
            setEmailErr(false);
        }
    }, [email]);

    useEffect(() => {
        if (age !== "" && !isNaN(age) && age >= 0) {
            setAgeErr(false);
        }
    }, [age]);

    return (
        <>
            <form
                className="m-auto border rounded text-center my-5 py-3"
                style={{ maxWidth: 400, margin: 'auto' }}
                onSubmit={signUpFormHandler}
            >
                <Typography variant="h5" gutterBottom>
                    User Information
                </Typography>
                <div>
                    <TextField
                        className="my-2"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        error={firstNameErr}
                        helperText={firstNameErr ? 'First Name must contain only letters!' : ''}
                    />
                </div>
                <div>
                    <TextField
                        className="my-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="outlined-basic-email"
                        label="Email"
                        variant="outlined"
                        error={emailErr}
                        helperText={emailErr ? 'Email must be a valid Gmail address!' : ''}
                    />
                </div>
                <div>
                    <TextField
                        className="my-2"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        id="outlined-basic-age"
                        label="Age"
                        variant="outlined"
                        type="number"
                        error={ageErr}
                        helperText={ageErr ? 'Age must be a positive number!' : ''}
                    />
                </div>
                <Button type="submit" className="my-2" variant="outlined">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default Mui;