
import React, { Component } from 'react'
import { useDispatch, useSelector  } from "react-redux";
import useStyles from "./styles"
import NotfyContainer from './notfyContainer/NotfyContainer';


export default function NotifyBar(props)  {
    const classes = useStyles()
    const {notification} = useSelector(state=> state.notification)
 


    return (

        <div className={classes.container}>
        <input type="checkbox" name="" className={classes.btn} />
        <div className={classes.box}>
            <div className={classes.header}>
                <p>Notifications</p>
            </div>
            <div  className={classes.content}>
            {notification.map((ele)=>
                {
                   return <NotfyContainer key={ele._id} notification={ele}/>
                }
            )}
              
            
            </div>
        </div>
    </div>
    )
  
}
