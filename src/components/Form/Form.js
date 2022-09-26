import React, {useState, useEffect} from "react";
import useStyles from "./styles"
import { TextField, Button, Typography, Paper, DialogTitle } from "@material-ui/core";
import FileBase from 'react-file-base64'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createNewPost, updateNewPost } from "../../actions/actions";
import { setClickForForm } from "../../redux/clickForNotifyReducer";
import axios from "axios";

const Form = ({postId, setPostId})=>{
    const classes = useStyles()
    const {clickForForm} = useSelector(state=> state.randomValues)
    const { posts } = useSelector((state)=> state.posts)
    const dispatch = useDispatch()
    // const [currentId, setcurrentId] = useState(postId)
    const [postData, setPostData] = useState({})

   useEffect(()=>{
    if(postId === null){
        setPostData({
            creator: JSON.parse(localStorage.getItem('profile')).user.first_name + " " + JSON.parse(localStorage.getItem('profile')).user.last_name, title: "", message: "", tags: "", likeCount: 0 
        })
    }else{
        const newPost = posts.filter(post => post._id === postId)[0]
       
        setPostData({
            creator: newPost.creator, title: newPost.title, message: newPost.message, tags: newPost.tags, selectedField:""
        })
    }
   }, [postId])

   
   const handleSubmit = (e)=>{
        e.preventDefault();
       const userId =  JSON.parse(localStorage.getItem('profile')).user._id
        if(postId === null){
            var data = {...postData, user_id: userId } 
            createNewPost(dispatch, data)
            setPostData({
                creator: JSON.parse(localStorage.getItem('profile')).user.first_name + " " + JSON.parse(localStorage.getItem('profile')).user.last_name, title: "", message: "", tags: "", likeCount: 0 
            })
            dispatch(setClickForForm(!clickForForm))
        }else{
            var data = {...postData, user_id: userId } 
            updateNewPost(dispatch, data, userId )        
        }
        
   }
   
   const clear = ()=>{
       setPostId(null)
   }

    return(
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{postId ? "Editing": "Creating"} a Memory</Typography>
        {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
       
    )
}

export default Form

