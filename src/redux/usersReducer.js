import { createSlice } from '@reduxjs/toolkit'



const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    friends: [],
    loggedInUser:{},
  },
  reducers: {
    getAllUsers(state, action) {
      state.users = action?.payload
    },
    getAllFriends(state, action){
      state.friends = action.payload
    },
    addFriend(state, action){
      state.loggedInUser.friends.push(action.payload)
    },
    setLoggedInUser(state, action){
      state.loggedInUser = action.payload
      
    }
   
  },
})

export const {getAllUsers, getAllFriends, addFriend, setLoggedInUser} = usersSlice.actions
export default usersSlice.reducer