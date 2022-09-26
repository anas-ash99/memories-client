import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import NotifyBar from './notificationBar/NotifyBar';
import { getAllNotfs } from '../../redux/notificationReducer';
import { useDispatch } from 'react-redux';
import { getFriendsPosts } from '../../actions/actions';
import { setPostsForUser } from '../../redux/postReducer';

export default function AllNofificationsPage() {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
        if (!JSON.parse(localStorage.getItem('profile'))) {
            history.push("/auth")
        }else{
            const  user = JSON.parse(localStorage.getItem('profile'))?.user
            Axios.post("/users/check_authentication", {token: JSON.parse(localStorage.getItem('profile')).jwt, userId: user._id}).then(res=>{
                if(res.data.message === false){
                    localStorage.clear()
                    history.push("/auth")
                }else{
                    
                    Axios.get(`/posts/get_posts_for_one_user/${res.data.user.id}`).then(res=>{
                        dispatch(setPostsForUser(res.data))
                    })
                    
                }
            }) 
            Axios.get(`/notification/get_for_user/${user?._id}`).then(res=>{
                dispatch(getAllNotfs(res.data))
              })
            // Axios.post("/users/check_authentication", {token: JSON.parse(localStorage.getItem('profile')).jwt, userId: user._id}).then(res=>{
            //     if(res.data.message == true){
            //         getFriendsPosts(dispatch, res.data.user.id)
            //     }else{
            //         localStorage.clear()
            //         history.push("/auth")
            //     }
            // })
        }
        
    },[])


  return (
    <div>
        <NotifyBar/>
    </div>
  )
}
