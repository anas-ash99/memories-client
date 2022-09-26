import { createSlice } from '@reduxjs/toolkit'



const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: []
  },
  reducers: {
    getFriends(state, action) {
      state.friends = action?.payload

    },
    
  },
})

export const {getFriends} = friendsSlice.actions
export default friendsSlice.reducer