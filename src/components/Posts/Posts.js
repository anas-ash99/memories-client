import React, { useEffect } from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress  } from "@material-ui/core";
import useStyles from "./styles"
import { useSelector } from "react-redux";


const Posts = ({setPostId})=>{
    const { friendsPost } = useSelector((state)=> state.posts)
    const classes = useStyles()
    
    return(
        <>
        
            {!friendsPost.length? <CircularProgress/> : (
                <Grid className={classes.mainContainer} container alignitem="stretch" spacing={3}>
                   {friendsPost.map((post) => (
                      <Post key={post?.id} post = {post} setPostId={setPostId} />
                   ))}
                </Grid>
            )} 
            
        </>
    )
}

export default Posts