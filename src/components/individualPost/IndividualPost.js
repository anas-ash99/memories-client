import React, { useEffect } from 'react'
import Post from '../Posts/Post/Post'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Grid  } from "@material-ui/core";
import useStyles from "./styles"
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllNotfs } from '../../redux/notificationReducer';
import { setLoggedInUser } from '../../redux/usersReducer';
import { setCurrentPost, setPostsForUser } from '../../redux/postReducer';


export default function IndividualPost() {
  const history = useHistory()
  const dispatch = useDispatch()
  const {currentPost} = useSelector((state)=> state.posts)
  const classes = useStyles()
  const {postId} = useParams()


  useEffect(()=>{
    
    if(currentPost.length === 0){
      history.push("/")
    }
    
    if (!JSON.parse(localStorage.getItem('profile'))) {
        history.push("/auth")
    }else{
        
        const  user = JSON.parse(localStorage.getItem('profile')).user
        
        Axios.post("/users/check_authentication", {token: JSON.parse(localStorage.getItem('profile')).jwt, userId: user._id}).then(res=>{
            if(res.data.message == true){
              Axios.get(`/posts/get_posts_for_one_user/${res.data.user.id}`).then(res=>{
                dispatch(setPostsForUser(res.data))
            })
            Axios.get(`/notification/get_for_user/${user?._id}`).then(res=>{
              dispatch(getAllNotfs(res.data))
            })
            
            Axios.get(`/users/getLoggedInUser/${user._id}/${user.bts_id}`).then(res=>{
              dispatch(setLoggedInUser(res.data))
            }) 
            Axios.get(`/posts/get_posts_for_one_user/${res.data.user.id}`).then(res=>{
              dispatch(setPostsForUser(res.data))
            })
            dispatch(setCurrentPost(postId))
            }else{
                localStorage.clear()
                history.push("/auth")
            }
        }) 
         
    }  
}, [])

    
  return (
    <Grid className={classes.mainContainer} container alignitem="stretch" spacing={3}>
      <Grid item xs={6} style={{marginLeft: "25%"}} >
          {currentPost.length !== 0 && <Post post={currentPost[0]}  />}
      </Grid>     
    </Grid>
  )
}
