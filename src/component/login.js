import axios from 'axios';
import React, { useState } from "react";
import {Input} from 'antd';

export const Login =  ()  =>{
    const [name, setName] = useState("");
    const [password, setPass] = useState("");

    const config = {
        method: 'post',
        url: 'http://localhost:3030/login'  ,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        data : {"name": name,"password": password}
        }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios(config)
        .then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.accessToken)
            window.location.assign('/user');
        }
            
        )
        .catch((err) => console.log(err));
        
    };
    return (<div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <label>
                <div style={{ marginBottom: 16 }}>
                <Input type="text"
                    id="name"
                    placeholder="name"
                    value={name}
                    onChange={(event)=>{setName(event.target.value)}}/>
                </div>
                <div style={{ marginBottom: 16 }}>
                <Input
                    type="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(event)=>{setPass(event.target.value)}}
                />
                </div>
            </label>
            <Input type="submit" value="Submit" />
            </form>
        </div>);
}