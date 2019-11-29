import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import useForm from 'react-hook-form';

import './noteapp.css';


const LoginPage = (props) => {

    const [ UserId, setUserId]  = useState("");

    useEffect(() => {
        document.title = "Ayush - Register";
          // (async () => {
          //     const rawResponse = await fetch('https://notesapis.herokuapp.com/', {
          //       method: 'POST',
          //       headers: {
          //         'Accept': 'application/json',
          //         'Content-Type': 'application/json'
          //       },
          //       body: JSON.stringify({"userId": "5dd50659c9ef50277c871741"})
          //     });
          //     const content = await rawResponse.json();
              
          //     for (const [index, value] of content.entries()) {
          //      // items.push(<div key={index} className="note">{value.title}</div>)
          //       items.push(value);
          //     }
          //     setItems([...items]);
          //   })();
      });

      const { register, handleSubmit, errors } = useForm(); // initialise the hook
      const onSubmit = async (data) => {
          const toRegister = {
              "email": data.email,
              "passkey": data.password,
              "name": data.name
          };
         const response = await toRegisterFunc(toRegister);
         if(response){
             if(response.msg){
                 alert('Existing User, Please login');
                props.history.push("/login");
             }
             else {
                localStorage.setItem('userId', response._id);
                localStorage.setItem('userName', response.name);
                props.history.push("/notesapp");

                //return <Redirect to={{pathname: '/notesapp'}} push/>;
             }
         }
      };

      const toRegisterFunc = async (toRegister) => {
        const rawResponse = await fetch('https://notesapis.herokuapp.com/userregistration', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(toRegister)
        });
        const content = await rawResponse.json();
        return content;
      };

      return (<div className="loginBody">
            <div className="hireHead"> 
            <h2>Register - Note App</h2>
            {/* <br /> */}
            Keep Your Personal Note Online
            </div>

            <div className="loginPrompt signupPrompt">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Register for Online Note</h2>
                    <div className="name-section">
                <input type="text" id="name" name="name" ref={register} required></input>
                <label className="name-label">
                    <span className="span-name">Name</span>
                </label>
                </div>
                <div className="email-section">
                <input type="text" name="email" ref={register} required></input>
                <label className="email-label">
                    <span className="span-email">Email</span>
                </label>
                </div>
                <div className="password-section">
                <input type="password" name="password" autoComplete="off" ref={register} required></input>
                <label className="label-password">
                <span className="span-password">Password</span>
                </label>
                </div>
                <button type="submit" className="loginBtn">Register</button>
                <br />
                <label className="newUser">Existing User?, Please <Link to='/login' style={{ textDecoration: 'none' }}>LogIn</Link></label>
                </form>
            </div>
      </div>);
}

export default LoginPage;
