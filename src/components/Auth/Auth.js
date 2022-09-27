import useStyles from "./AuthStyles"
import React, {useEffect, useState} from 'react'
import Input from "./Input";
import {  Avatar, Button, Typography, Paper, Grid, Container} from "@material-ui/core";
import LockOutLinedIcion from '@material-ui/icons/LockOutlined'
import {GoogleLogin} from 'react-google-login'
import Icon from "./Icon";
import { useSelector, useDispatch  } from "react-redux";
import jwt_decode from 'jwt-decode'
import {authNewUser} from '../../actions/actions'
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { getUsers } from "../../actions/usersAction";
import { getAllUsers } from "../../redux/usersReducer";
import { setLoggedInUser } from "../../redux/usersReducer";

export default function Auth() {
    const {users} = useSelector(state=> state.users)
    const history = useHistory()
    const classes = useStyles()
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const [user, setUser] = useState({first_name: "user", last_name: "", email: "user@gmail.com", password: "", confirmPassword: ""})
  
    const handleCallbackResponse = (res) =>{
        var userObj = jwt_decode(res.credential)
        authNewUser(dispatch, {"user": userObj, "jwt_token": res.credential})
        history.push("/")
        
    }

    // useEffect(()=>{
    //    /* global google*/
    //    google.accounts.id.initialize({
    //      client_id: "698517632304-9k8dt54pir7fs6mgqv6jml6eudgpcd4a.apps.googleusercontent.com",
    //      callback: handleCallbackResponse
    //    })
       
    //    google.accounts.id.renderButton(
    //     document.getElementById("signinDiv"),
    //     {theme: "outline", size: "large"}
    //    )
      
    // },[])


     useEffect(()=>{
    
            const  user = JSON.parse(localStorage.getItem('profile'))?.user
            Axios.post("/users/check_authentication", {token: JSON.parse(localStorage.getItem('profile'))?.jwt, userId: user?._id}).then(res=>{
                if(res.data.message === true){
                    history.push("/")
                }
            })
     
     }, [])

    
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleSignup = () =>{
      var userExist = false


        if (user?.password === user?.confirmPassword) {
            Axios.post("users/create_user/", user).then(res=>{
                if(res.data.userExist == true){
                    alert("User already Exsit")
                } else{
                    window.location.reload(false);
                }
            })
        }else {
            alert("Passwords Dont Match")
        }
        
        
    }
    const handleSignin = () =>{
        var userExist = false
        var userObj = {}
        Axios.post("/users/sign_in", {email: user.email, password: user.password}).then(res=>{
            
            if (res.data.auth == false) {
                alert(res.data.message)
            }else{
                authNewUser(dispatch, res.data)
                dispatch(setLoggedInUser(res.data))
                history.push("/")
            }
            // console.log(res.data);
        })

    
        
    }
    const handleChange = (event) =>{
        var {name , value} = event.target
        setUser((prev) =>({...prev , [name]: value}))
    }
    
    const handleShowPassword = ()=>{
        setShowPassword((prev)=> !prev)
    }
    const switchMode = () =>{
        setIsSignUp((prev) => !prev)
    }
    const googleSuccess = async (res) =>{
        console.log(res);
    }
    const googleFailure = (err) =>{
        console.log(err)
    }

  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutLinedIcion  />
            </Avatar>
            <Typography variant="h5">{isSignUp? "Sign Up": "Sign In"}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignUp &&
                         <>
                             <Input className={classes.input}  name='first_name' label='First Name' handleChange={handleChange} autoFocus half/>
                             <Input className={classes.input} name='last_name' label='Last Name' handleChange={handleChange} half />
                        </>
                    }
                    <Input className={classes.input} value={user.email} name='email' label='Email Adress' handleChange={handleChange} />
                    <Input className={classes.input} name='password' label='Password' handleChange={handleChange} type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword}/>
                    {isSignUp && <Input className={classes.input} name='confirmPassword' label='Repeat Password' handleChange={handleChange} type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword}/> }
       
                </Grid>
                {isSignUp ? 
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleSignup} >Sign Up</Button>
                : 
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleSignin} >Sign In</Button> }
               
                
                <div id="signinDiv"></div>

                {/* <GoogleLogin 
                clientId="698517632304-9k8dt54pir7fs6mgqv6jml6eudgpcd4a.apps.googleusercontent.com" 
                render={renderProps=>(
                <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} startIcon={<Icon/>} variant='contained'>
                   Google Sign In
                </Button>
                )}
                onSucces={googleSuccess}
                onFailure={googleFailure}    
                cookiePolicy={'single_host_origin'}
                /> */}
                
                 <Grid container justifyContent="flexEnd">
                    <Button onClick={switchMode}>{isSignUp ? "Aleady Signed Up ? Clicke Here": "not Signed Up yet ? Clicke Here" }</Button>
                 </Grid>
            </form>

        </Paper>

    </Container>
  )
}
