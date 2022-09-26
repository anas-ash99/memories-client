import React, { useEffect, useState } from 'react'
import {Link, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Avatar, Button, Toolbar, Typography, Container } from "@material-ui/core";
// import { NotificationIcon } from 'react-autoql';
import useStyles from "./styles"
import memories from '../../images/memories.png'
import {logoutUser} from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/usersReducer';
import SearchBar from "material-ui-search-bar"
import axios from 'axios';
import { getFriends } from '../../redux/friendsReducer';
import { FaBell } from "react-icons/fa";
import { clickForNotify, userSrearching, filterUsers, setSearchValue, setClickForProfile } from '../../redux/clickForNotifyReducer';
import { setNotificationsCount } from '../../redux/notificationReducer';
import { setPostsForUser } from '../../redux/postReducer';

export default function Navbar() {
    const {users} = useSelector(state=> state.users)
  
    // const {notification} = useSelector(state=> state.notification)
    const {searchValue, clickForProfile, bellClick} = useSelector(state=> state.randomValues)
    const {friends} = useSelector(state=> state.users)
    const {notificationsCount} = useSelector(state=> state.notification)
    const [logedInuser, setLogedInUser] = useState(JSON.parse(localStorage.getItem('profile')))
    // const [searchValues, setsearchValues] = useState("")
    const [clickForNotifyValue, setClickForNotify] = useState(false)
    const [ filteredUsers,  setFilteredUsers] = useState([])
    const [ count,  setCount] = useState(0)
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    var userNames = []
     
    useEffect(()=>{
      const token = logedInuser?.jwt_token
      
      setLogedInUser(JSON.parse(localStorage.getItem('profile')))
      
    },[location])
    
    useEffect(async ()=>{
      await axios.get("/users/getusers").then(res =>{
      dispatch(getAllUsers(res.data))
      })
      if(logedInuser){
        await axios.get(`/users/getFriends/${logedInuser.user._id}`).then( res =>{
          res.data.forEach(user=>{
            userNames.push(user.firstName)
          })
        })
        dispatch(getFriends(userNames))
        axios.get(`/posts/get_posts_for_one_user/${logedInuser?.user?._id}`).then(res=>{
          dispatch(setPostsForUser(res.data))
        })
      }
      },[])


    const handleLogout = () =>{
      logoutUser(dispatch)
      setLogedInUser(null)
      history.push("/auth")
      dispatch(clickForNotify(false))
      dispatch(setClickForProfile(false))
      
      
    }
   const handleSearch = (value)=>{ 
      dispatch(userSrearching(true))
      // setsearchValues(value)
      dispatch(setSearchValue(value))
      // var newValue = value.split(" ").join("")
      // console.log(newValue);
      setFilteredUsers(
       users.filter(user =>{
        var user_name = (user.first_name + user.last_name)
        var newValue = value.split(" ").join("")
        const logedInUsername = logedInuser.user.first_name + logedInuser.user.last_name
        return user_name.toLowerCase().includes(newValue.toLowerCase()) && logedInUsername !== user_name && !user.friends.includes(logedInuser.user._id)
        })
      )  
      dispatch(filterUsers(filteredUsers))
   }
    
    const clickForNotification = ()=>{
      setClickForNotify(prev=>(!prev))
      dispatch(clickForNotify(!bellClick))
      if (bellClick === true) {
        dispatch(setNotificationsCount(0))
      }
      
    }



  return (
    
    <AppBar className={classes.appBar} position="static" color="inherit">

        <div className={classes.brandContainer} >
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" >Memories</Typography>
            <img className={classes.image} src ={memories} alt="memories" height="60" />
            {logedInuser!== null &&
            <div>  
              <SearchBar placeholder="Search for New Friends" value={searchValue} onChange={handleSearch} />
              {/* <div className={classes.div} onClick={console.log("click asd")} ></div>  */}
            </div> }
            

        </div>  
        <Toolbar className={classes.toolbar}>
       
            {logedInuser!== null ?
              <div className={classes.profile}>
                
                <Typography className={classes.userName} variant="h6">{logedInuser.user?.first_name + " " + logedInuser.user?.last_name  }</Typography>
                <div><FaBell onClick={clickForNotification} size={"1.8rem"} className={classes.bellIcon}/><div className={classes.notfyCount} >{notificationsCount}</div></div>
                <Avatar onClick={()=> {return dispatch(setClickForProfile(!clickForProfile))}} className={classes.purple} alt={logedInuser.user?.first_name } src={logedInuser.user?.picture}>{logedInuser.user?.first_name.charAt(0)}</Avatar>
                <Button variant='contained' onClick={handleLogout} className={classes.logout} color="secondary" >Log Out</Button>
              </div>
            :
            
              <Button component={Link} variant='contained'  to="/auth" className={classes.logout} color="secondary" >Log in</Button>
            }
        </Toolbar>
        
    </AppBar>
   
        
  )
}






