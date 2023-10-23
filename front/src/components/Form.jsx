import { useState } from "react";
import validation from "../validation";

// eslint-disable-next-line react/prop-types
const Form =({login})=>{

    const [errors, setErrors] = useState({});
    
    const [userData, setUserData] = useState({
        email :'',
        password : ''
    });

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        });
        setErrors(validation({...userData,[event.target.name]: event.target.value}))
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
    }
    return (
    <div>
    <form>
        <label>
        Email:
        <input
            type="email"
            name="email"
            id=""
            value={userData.email}
            onChange={handleChange}
            placeholder="ejemplo@gmail.com"
        />
        </label>
        {errors.e1 ? (
        <p>{errors.e1}</p>
        ) : errors.e2 ? (
        <p>{errors.e2}</p>
        ) : (
        <p>{errors.e3}</p>
        )}
        <br />
        <label>
        Password:
        <input
            type="password"
            name="password"
            id=""
            value={userData.password}
            onChange={handleChange}
            placeholder="Password1"
        />
        </label>
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        <br />
        <button type="submit" onClick={handleSubmit}>
        Submit
        </button>
    </form>
    </div>
    );
};

export default Form;