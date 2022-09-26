import { createSlice } from '@reduxjs/toolkit'
import { setLoggedInUser } from './usersReducer'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: null
  },
  reducers: {
    authUser(state, action) {
      state.auth = action?.payload
      localStorage.setItem("profile", JSON.stringify({...action?.payload}))
     
    },
    logout(state, action) {
      state.auth = null
      localStorage.clear()
    },
  },
})

export const {authUser, logout} = authSlice.actions
export default authSlice.reducer