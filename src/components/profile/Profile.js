import React, { useEffect } from 'react'
import Axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default function Profile() {
    const history = useHistory()
    useEffect(()=>{
        if (!JSON.parse(localStorage.getItem('profile'))) {
            history.push("/auth")
        }else{
            const  user = JSON.parse(localStorage.getItem('profile')).user
            Axios.post("/users/check_authentication", {token: JSON.parse(localStorage.getItem('profile')).jwt, userId: user._id}).then(res=>{
                if(res.data.message === false){
                    localStorage.clear()
                    history.push("/auth")
                }
            }) 
        }
        
    },[])
 

  return (
    <div>Profile</div>
  )
}
