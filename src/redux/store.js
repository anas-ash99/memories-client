import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postReducer'
import  authReducer  from './authReducer'
import usersReducer from './usersReducer'
import friendsReducer from './friendsReducer'
import notificationReducer from './notificationReducer'
import clickForNotifyReducer from './clickForNotifyReducer'
export default configureStore({
    reducer: {
        posts: postReducer,
        auth: authReducer,
        users: usersReducer,
        friends: friendsReducer,
        notification: notificationReducer,
        randomValues: clickForNotifyReducer,
    }
})