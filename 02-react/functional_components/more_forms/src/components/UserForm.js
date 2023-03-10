import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) =>
    {
        setFirstName(e.target.value);
        if(e.target.value.length < 1)
        {
            setFirstNameError("First name is required.")
        }
        else if(e.target.value.length < 2)
        {
            setFirstNameError("First name must be at least 2 characters long.");
        }
        else
        {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) =>
    {
        setLastName(e.target.value);
        if(e.target.value.length < 1)
        {
            setLastNameError("Last name is required.")
        }
        else if(e.target.value.length < 2)
        {
            setLastNameError("Last name must be at least 2 characters long.");
        }
        else
        {
            setLastNameError("");
        }
    }

    const handleEmail = (e) =>
    {
        setEmail(e.target.value);
        if(e.target.value.length < 1)
        {
            setEmailError("Email is required.")
        }
        else if(e.target.value.length < 5)
        {
            setEmailError("Email must be at least 5 characters long.");
        }
        else
        {
            setEmailError("");
        }
    }

    const handlePassword = (e) =>
    {
        setPassword(e.target.value);
        if(e.target.value.length < 1)
        {
            setPasswordError("Password is required.")
        }
        else if(e.target.value.length < 8)
        {
            setPasswordError("Password must be at least 8 characters long.");
        }
        else
        {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) =>
    {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1)
        {
            setConfirmPasswordError("Confirm password is required.")
        }
        
        else if(e.target.value !== password)
        {
            setConfirmPasswordError("Passwords must match.")
        }
        else
        {
            setConfirmPasswordError("");
        }
    }

    return (
        <>
            <form onSubmit = {(e) => e.preventDefault()} className="form-group">
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                    {
                        firstNameError ?
                        <p>{firstNameError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} />
                    {
                        lastNameError ?
                        <p>{lastNameError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={handleEmail} />
                    {
                        emailError ?
                        <p>{emailError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} />
                    {
                        passwordError ?
                        <p>{passwordError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handleConfirmPassword} />
                    {
                        confirmPasswordError ?
                        <p>{confirmPasswordError}</p> :
                        ""
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
}
export default UserForm;