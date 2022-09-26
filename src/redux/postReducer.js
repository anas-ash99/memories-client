import { createSlice } from '@reduxjs/toolkit'



const counterSlice = createSlice({
  name: 'posts',
  initialState: {
    postsForuser: [],
    friendsPost: [],
    currentPost: [],
    currentPostId: ""
  },
  reducers: {
    setPostsForUser(state, action) {
      state.postsForuser = action.payload
    },
    setFriendsPost(state, action) {
      state.friendsPost = action.payload
    },
    createPost(state, action) {
      state.postsForuser = [...state.posts, action.payload]
    },
    updatePost(state, action) {
      state.postsForuser.map((post, index) =>{
            if (post?._id === action.payload?._id) {
              // state.posts[index] = action.payload.data
            }
      })
    },
    deletePost(state, action){
      state.posts = state.posts.filter(post => post._id !== action.payload) 
 
    },
    likePost(state, action){
      state.friendsPost.map(post =>{
        if(post._id === action.payload.postId){
          post.likeCount = post.likeCount + 1
          post.likes.push(action.payload.userId)
        }
      })
    },
    dislikePost(state, action){
      state.friendsPost.map(post =>{
        if(post._id === action.payload.postId){
          post.likeCount = post.likeCount - 1
        }
      })
    },
    setCurrentPost(state, action){
      state.currentPostId = action.payload
      // state.postsForuser.forEach((post) =>{
      //   if(post._id === action.payload){
      //     state.currentPost.push(post)
      //   }
      // })
      state.currentPost = state.postsForuser.filter(post =>{
        return post._id == action.payload     
      })
    }
  },
})

export const {setFriendsPost,setPostsForUser, createPost, updatePost, deletePost, likePost, dislikePost, setCurrentPost} = counterSlice.actions
export default counterSlice.reducer