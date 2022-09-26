import axios from "axios";
import getAllUsers from '../redux/usersReducer'


async function getUsers(dispatch) {
    try {
        await axios.get("/users/getsers").then(res =>{
            dispatch(getAllUsers(res.data))
            
        })
       
    }
    catch (error) {
        console.log(error);
    }
}


export {getUsers}