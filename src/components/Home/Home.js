import React from 'react'
import { useDispatch, useSelector  } from "react-redux";
import { useState, useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { getFriendsPosts } from '../../actions/actions';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';
import useStyles from "./homeStyles"
import { getAllNotfs, setNotificationsCount} from '../../redux/notificationReducer';
import NotifyBar from '../notifyBar/NotifyBar';
import UsersSearch from './UsersSearch/UsersSearch';
import { getAllFriends } from '../../redux/usersReducer';
import { getFriends } from '../../redux/friendsReducer';
import { setLoggedInUser } from '../../redux/usersReducer';
import { setSearchValue, setClickForForm } from '../../redux/clickForNotifyReducer';
import ProfileContainer from './profileContainer/ProfileContainer';


export default function Home() {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector((state)=> state.users)
    const {usersSearching, clickForProfile, bellClick, clickForForm} = useSelector(state=> state.randomValues)
    const [clickedForEdit, setClickedForEdit] = useState(false)
    const [postId, setPostId] = useState(null)
    const [clicked, setClicked]  = useState(false)
    const classes = useStyles()

   
    useEffect(()=>{
        
        if (!JSON.parse(localStorage.getItem('profile'))) {
            history.push("/auth")
           
        }else{
            
            const  user = JSON.parse(localStorage.getItem('profile')).user
           
            Axios.post("/users/check_authentication", {token: JSON.parse(localStorage.getItem('profile')).jwt, userId: user._id}).then(res=>{
                if(res.data.message == true){
                    getFriendsPosts(dispatch, res.data.user.id)
                }else{
                    localStorage.clear()
                    history.push("/auth")
                }
            }) 
            Axios.get(`/notification/get_for_user/${user?._id}`).then(res=>{
                dispatch(getAllNotfs(res.data))
              })
              dispatch(setSearchValue(""))
            Axios.get(`users/getFriends/${user?._id}`).then(async res =>{
                dispatch(getAllFriends(res.data))
              })
                
            Axios.get(`/notification/get_notifications_count/${user._id}`).then(res=>{
                dispatch(setNotificationsCount(res.data.count))
              })    
              Axios.get(`/users/getLoggedInUser/${user._id}/${user.bts_id}`).then(res=>{
                dispatch(setLoggedInUser(res.data))
              })  
        }  
    }, [])
    
    
     const handleClick = ()=>{
       setClicked(prev=>!prev)
       dispatch(setClickForForm(!clickForForm))
     }
  
    return (
        <>
            
            <Grow in>

                <Container >
                
                
                <div style={{position:"absolute", marginLeft:"500px", zIndex:"1"}} >{usersSearching === true && <UsersSearch/>}</div>
                <div style={{position:"absolute", marginRight:"500px", zIndex:"1"}} >{bellClick === true && <NotifyBar />}</div>
                <div style={{position:"absolute", marginLeft:"200px", zIndex:"1"}} >{clickForProfile === true && <ProfileContainer/>}</div>
                <div className={classes.form}  >{clickForForm === true && <Form  postId ={postId} setPostId={setPostId}/>}</div>
                {/* {clicked && <Grid style={{marginLeft: "40px"}} item xs={12} sm={7}>
                            <Form  postId ={postId} setPostId={setPostId}/>
                        </Grid> } */}
                 
                    <Grid style={{marginLeft: "40px"}} justify="space_between" alignItems="stretch">
                        <Grid item xs={10} sm={6} md={6}>
                            <Posts key={postId} setPostId={setPostId}/>
                        </Grid>
                        
                        <div className={classes.divStyle} onClick={handleClick}><AddIcon style={{color: "white", fontSize: "40px", marginTop: "4px"}} /></div>
                    </Grid>
                
                </Container>
            </Grow>
        </>
  )
}
