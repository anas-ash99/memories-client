import { createSlice } from '@reduxjs/toolkit'



const bellClickSlice = createSlice({
  name: 'randomValues',
  initialState: {
    bellClick: false,
    usersSearching: false,
    filterUsers: [],
    searchValue: "",
    clickForProfile: false,
    clickForForm: false,
  },
  reducers: {
    clickForNotify(state, action) {
      state.bellClick = action.payload
    },
    userSrearching(state, action) {
      state.usersSearching = action.payload
    },
    filterUsers(state, action){
      state.filterUsers = action.payload
    },
    setSearchValue(state, action){
      state.searchValue = action.payload
    },
    setClickForProfile(state, action){
      state.clickForProfile = action.payload
    },
    setClickForForm(state, action){
      state.clickForForm = action.payload
    },
  },
})

export const {clickForNotify, userSrearching, filterUsers, setSearchValue, setClickForProfile, setClickForForm} = bellClickSlice.actions
export default bellClickSlice.reducer