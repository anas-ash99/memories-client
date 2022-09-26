import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useStyles from "./styles"
import Axios from 'axios'
import { useEffect } from 'react'
import moment from "moment"
import { readOne } from '../../../../redux/notificationReducer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FaPassport } from 'react-icons/fa'
import { setCurrentPost } from '../../../../redux/postReducer'


export default function NotfyContainer({notification}) {

    const classes = useStyles()
    const history = useHistory()
    const { loggedInUser } = useSelector((state)=> state.users)
    const { currentPost } = useSelector((state)=> state.posts)
    const dispatch = useDispatch()
    const [readOrNot, setReadOrNot] = useState({});
    // const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [friends, setFriends] = useState(JSON.parse(localStorage.getItem('profile')).user.friends);
    const [clickedOnNotify, setClickedOnNotify] = useState(notification.read);
    // const {notification} = useSelector(state=> state.notification)


    useEffect(()=>{
      
      if (notification.read === false) {
           setReadOrNot({backgroundColor: "	rgb(224,224,224)" })
      }else{
        setReadOrNot({backgroundColor: "white" })
      }

     Axios.put(`/notification/readStatus/${notification._id}`)
      setClickedOnNotify(true)
      dispatch(readOne(notification._id))
    }, [])

  const onClick = ()=>{
    if(notification.type === "friend request"){
    }else if (notification.type === "like a post"){
      dispatch(setCurrentPost(notification.post_id))
      history.push(`/post/${notification?.post_id}`)
    }
    
  }
  

  

  return (
    
    <div onClick={onClick} style={readOrNot} className={classes.notification}>
        <img   className={classes.img} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_768/https://www.innovaxn.eu/wp-content/uploads/blank-profile-picture-973460_1280-768x768.png" alt="" />
        <div  className={classes.text}>
            <p  className={classes.textP}>
                <span className={classes.name}>{notification.content.userName + " " }</span> 
                {notification.content.action}
            </p>
    
            {/* {notification.type === "friend request" && !loggedInUser.friends.includes(notification.action_userId)  && <FaUserPlus onClick={addFriends} size={"1.5rem"} className={classes.addFriendIcon}/>} */}
            <p className={classes.time}>{moment(notification.createdAt).fromNow()}</p>
        </div>
    </div>
  )
}
