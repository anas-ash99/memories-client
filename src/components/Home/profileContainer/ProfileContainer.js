import React, { useEffect } from 'react'
import useStyles from "./styles"
import { IoMdSettings, IoIosHelpCircle } from "react-icons/io";
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

export default function ProfileContainer() {
    const classes = useStyles()
    const history = useHistory()

    

  return (
    <div className={classes.container}>
         
          <div className={classes.box}>
            <div className={classes.content}>
                <div onClick={()=> history.push("/profile")}  className={classes.notification}>
                <img   className={classes.img} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_768/https://www.innovaxn.eu/wp-content/uploads/blank-profile-picture-973460_1280-768x768.png" alt="" />
                    
                    <div className={classes.text}>
                        <p className={classes.textP}>
                        
                            <h3 className={classes.name}>Profile</h3>
                            
                        </p>
                    </div>
                </div>  
                <div  className={classes.notification}>
                    <IoIosHelpCircle size={"1.8em"} />
                    <div onClick={()=> history.push("/profile")} className={classes.text}>
                        <p className={classes.textP}>
                            <h3 className={classes.name}>Help & Supput</h3>
                            
                        </p>
                    </div>
                </div>
                <div className={classes.notification}>
                   <IoMdSettings size={"1.8em"} className={classes.settings}/>
                    <div className={classes.text}>
                    
                        <p className={classes.textP}>
                            
                            <h3 className={classes.name}>Settings</h3>
                            
                        </p>
                    </div>
                </div>    
            </div>
        </div>
        
        
    </div>
  )
}
