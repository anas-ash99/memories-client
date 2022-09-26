import { createSlice } from '@reduxjs/toolkit'



const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notification: [],
    notificationsCount: 0,
  },
  reducers: {
    getAllNotfs(state, action) {
      state.notification = action?.payload
    },
    readOne(state, action){
      state.notification.forEach(ele=>{
        if(ele._id === action.payload ) {
          ele.read = true
        }
      })
    },
    setNotificationsCount(state, action){
      state.notificationsCount = action.payload
    }
  },
})

export const {getAllNotfs, readOne, setNotificationsCount} = notificationSlice.actions
export default notificationSlice.reducer