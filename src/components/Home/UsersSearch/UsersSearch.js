import React from 'react'
import { useSelector } from 'react-redux'
import useStyles from "./styles"
import UsersContainer from './UsersContainer/UsersContainer'
export default function UsersSearch() {
    
    const {filterUsers,searchValue} = useSelector(state=> state.randomValues)
    const classes = useStyles()
   
    const test = () =>{
      if (filterUsers.length === 0) {
        return "  No Macth"
      }else{
        
      return  filterUsers.map((ele, index)=>
          {
            return <UsersContainer key={ele._id} user={ele}/>
          })
      }
    }

  return (
    <div className={classes.container}>
         {searchValue !== "" && (
          <div className={classes.box}>
            <div className={classes.content}>
           
            {filterUsers.length === 0 && "No Match"   }
            
              {filterUsers.map((ele, index)=>
                {
                if(index < 10 ){
                   return <UsersContainer key={ele._id} user={ele}/>
                }
                }
            )}
             
            </div>
        </div>
         )  }
        
    </div>
  )
}
