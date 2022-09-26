
import axios from "axios";
import { setFriendsPost, createPost, updatePost, deletePost, likePost, dislikePost } from '../redux/postReducer';

import {authUser, logout} from '../redux/authReducer';


async function getFriendsPosts(dispatch, userId) {
    try {
        const {data} = await axios.get(`/posts/getposts/${userId}`);
        dispatch(setFriendsPost(data))
        
    }
    catch (error) {
        console.log(error);
    }
}


async function createNewPost(dispatch, postData) {
    
    try {
      
        axios.post(`/posts/createpost`, postData);
        // dispatch(createPost(postData))
        // console.log(postData);
       
    }
    catch (error) {
        console.log(error);
    }
}

function updateNewPost(dispatch, postData, userId) {

    try {
        
         axios.patch(`/users/editPost/${userId}/`, postData)
        dispatch(updatePost( postData))
        
    }
    catch (error) {
        console.log(error);
    }
}

function deleteNewPost(dispatch, userId, postId) {

    try {
        axios.delete(`/users/deletePost/${postId}/`)
        // dispatch(deletePost(id))
    }
    catch (error) {
        console.log(error);
    }
}

function likeNewPost(dispatch, postId,userId, userLikedId, userName) {

    try {
        // console.log(userId);
        axios.put(`/posts/like_post/${postId}/${userId}`, {userLikedId: userLikedId, userName: userName}).then(res=>{
            if(res.data.message === "liked"){
                dispatch(likePost({postId: postId, userId: userId}))
            }else{
                dispatch(dislikePost({postId: postId, userId: userId}))
            }
        })
       
    }
    catch (error) {
        console.log(error);
    }
}


async function authNewUser(dispatch, data) {
    try {
        dispatch(authUser(data))
    }
    catch (error) {
        console.log(error);
    }
}

async function logoutUser(dispatch) {
    try {
        dispatch(logout())
    }
    catch (error) {
        console.log(error);
    }
}






export {getFriendsPosts, createNewPost, updateNewPost, deleteNewPost, likeNewPost, authNewUser, logoutUser}