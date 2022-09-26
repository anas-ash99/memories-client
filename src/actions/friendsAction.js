import axios from "axios";
import getFriends from '../redux/friendsReducer'

async function getAllFriends(dispatch, userId) {

    try {
        console.log(userId);
       const data =  await axios.get(`users/getFriends/${userId}`).then(async res =>{
          await  dispatch(getFriends(res.data))
          console.log(res.data);
            
        })
       
    }
    catch (error) {
        console.log(error);
    }
}
export {getAllFriends}