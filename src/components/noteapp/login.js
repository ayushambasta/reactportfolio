import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import useForm from 'react-hook-form';
import './noteapp.css';


const LoginPage = (props) => {


    const [ UserId, setUserId]  = useState("");

    useEffect(() => {
        document.title = "Ayush - Login";
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
        if(data){
            console.log(data);
            const toLoginData = {
                "email": data.email,
                "passkey": data.password
        };
        const response = await toLoginFunc(toLoginData);
        if(response){
            if(response._id){
                localStorage.setItem('userId', response._id);
                localStorage.setItem('userName', response.name);
                props.history.push("/notesapp");
            }
        }
        }
      };

      const toLoginFunc = async (toLogin) => {
        const rawResponse = await fetch('https://notesapis.herokuapp.com/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(toLogin)
        });
        const content = await rawResponse.json();
        return content;
      };

      return (<div className="loginBody">
            <div className="hireHead"> 
            <h2>Login - Note App</h2>
            {/* <br /> */}
            Keep Your Personal Note Online
            </div>

            <div className="loginPrompt">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login to Online Note</h2>
                <div className="email-section">
                <input type="text" name="email" ref={register} autoComplete="off" required></input>
                <label className="email-label">
                    <span className="span-email">Email</span>
                </label>
                </div>
                <div className="password-section">
                <input type="password" name="password" ref={register} required></input>
                <label className="label-password">
                <span className="span-password">Password</span>
                </label>
                </div>
                <button type="submit" className="loginBtn">Login</button>
                <br />
                <label className="newUser">New User?, Please <Link to='/register' style={{ textDecoration: 'none' }}>Register</Link></label>
                </form>
            </div>
      </div>);
}

export default LoginPage;