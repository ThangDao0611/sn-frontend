import React, { useEffect,useState } from 'react';
import axios from 'axios';

export const UserInfo =  () => {

    const [name,setName] = useState("");
    const [password, setPass] = useState("");

    let token = localStorage.getItem("token")

    const config ={
        method: 'get',
        url: 'http://localhost:3030/user',
        headers:{
            'authorization': `${token}`
        }
    };
        useEffect(()=>{
            axios(config)
            .then((res)=>{
            setName(res.data.user_name);
            setPass(res.data.user_password);
            })
            .catch(err=>console.log(err));
        },[])
        
        
        
        return (
            <div>
                    <h1>INFORMATION</h1>
                    <h2>{name}</h2>
                    <h2>{password}</h2>
                    <h2>{token}</h2>
            </div>
        );
}
