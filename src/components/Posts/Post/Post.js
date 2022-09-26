import React, { useEffect, useState } from "react";
import useStyles from "./styles"
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorzIcon from '@material-ui/icons/MoreHoriz'
import moment from "moment"
import { useSelector } from "react-redux";
import { deleteNewPost, likeNewPost } from "../../../actions/actions";
import { useDispatch } from "react-redux";
import { dislikePost } from "../../../redux/postReducer";
import { likePost } from "../../../redux/postReducer";
import axios from "axios";

const Post = ({post, setPostId})=>{
    const dispatch = useDispatch()
    const classes = useStyles()
    const [clickedForEdit, setClickedForEdit] = useState(false)
    const [likedPost, setLikedPost] = useState(false)

    useEffect(()=>{
       const loggedInUser = JSON.parse(localStorage.getItem('profile')).user
       if (post?.likes.includes(loggedInUser._id)) {
            setLikedPost(true)
       }else{
            setLikedPost(false)
       }
       
    }, [])

    const handelDelete = ()=>{
        
        // deleteNewPost(dispatch,post.id )
    }
    
    const likeDislikePost = ()=>{
        const user = JSON.parse(localStorage.getItem('profile')).user 
         
        axios.put(`/posts/like_post/${post._id}/${user._id}`, {userToNotifyId: post.user_id, userName: `${user.first_name} ${user.last_name}`}).then(res=>{
            if(res.data.message === "liked"){
                dispatch(likePost({postId: post._id, userId: user._id}))
                setLikedPost(true)
            }else{
                dispatch(dislikePost({postId: post._id, userId: user._id}))
                setLikedPost(false)
            }
        })
    
    }


    return(
        <Grid  item xs={12} sm={12} >
       <Card className={classes.card}>
        <CardMedia className={classes.media} img={post?.selectedFile} />
        <div className={classes.overlay}>
             <Typography variant="h6" >{post.creator}</Typography>
             <Typography variant="body2" >{moment(post.created_at).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
           <Button style={{color: "white"}} size="small"  >
             <MoreHorzIcon fontSize="default" />
           </Button>
        </div>
        <div className={classes.details}>
            <Typography variant="h6" color="textSecondary">{post.tags.map(tag => tag)}</Typography>
        </div> 
            <Typography className={classes.title} variant="h5" gutterBottom >{post.title}</Typography>
            <CardContent>
                
                <Typography variant="h5" color="textSecondary"  component="p" gutterBottom >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions} >
                <Button  size="small" color="primary" onClick={likeDislikePost }>
                    <ThumbUpIcon className={likedPost && (classes.likeButton)} fontSize="small"/>
                    &nbsp; {likedPost ? "Dislike": "Like"} &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={handelDelete}>
                    {/* <DeleteIcon fontSize="small"/> */}
                     Comment
                </Button>
            </CardActions>
            
       
       </Card>
       </Grid>
    )
}

export default Post