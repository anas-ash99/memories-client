import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useStyles from "./styles"
import Axios from 'axios'
import { useEffect } from 'react'
import { FaUserPlus, FaUserTimes} from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../../../redux/clickForNotifyReducer'



export default function UsersContainer({user}) {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [isRequested, setIsRequested] = useState(false)
    const [logedInUser, setLogedInUser] = useState(JSON.parse(localStorage.getItem('profile')))
     useEffect(()=>{
        
        Axios.get(`/notification/check_if_friend_requested/${user._id}/${logedInUser.user._id}`).then(res=>{
            setIsRequested(res.data.message)
        })
    },[])


    const addFriend = () => {
        // const logedInUser = JSON.parse(localStorage.getItem('profile'))
        Axios.post(`/notification/requestFriend/${logedInUser.user._id}/${user._id}`, {userName: logedInUser.user.first_name + " " + logedInUser.user.last_name}).then(res=>{
            console.log(res.data.message);
            if(res.data.message === true){
                alert("Friend request has been sent")
                dispatch(setSearchValue(""))
                // dispatch(filterUsers([]))
            }
        })

    }
    const cancelFriendRequest = ()=>{
        Axios.put(`/notification/cancel_friend_request/${user._id}/${logedInUser.user._id}`).then(res=>{
          if (res.data.acknowledged === true) {
            alert("Friend request has been canceled")
            dispatch(setSearchValue(""))
          }
        })
        //  console.log("cancel " + user.email);
    }    
    
  return (

    <div className={classes.notification}>
        <img   className={classes.img} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_768/https://www.innovaxn.eu/wp-content/uploads/blank-profile-picture-973460_1280-768x768.png" alt="" />
        <div className={classes.text}>
            <p className={classes.textP}>
                <h3 className={classes.name}>{user.first_name + " " + user.last_name }</h3> {isRequested === false ? (<FaUserPlus onClick={addFriend} style={ {cursor: "pointer"}}/>): <FaUserTimes onClick={cancelFriendRequest} style={{cursor: "pointer"}} /> } 
                 
            </p>
            {/* <p className={classes.time}>{moment(notification.createdAt).fromNow()}</p> */}
        </div>
    </div>
  )
}


// {friends.forEach(friend=>{
//     if(friend.last_name!== user.last_name){ 
//        console.log(friend)
//        return <FaUserPlus onClick={addFriend} style={ {cursor: "pointer"}}/>
//     }})}