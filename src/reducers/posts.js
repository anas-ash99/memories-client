export default (posts = [], action) =>{
      switch (action.type) {
        case "FETCH_ALL":
            return action.paylaod;
        case "CREATE":
            return action.paylaod;
        default:
            return posts;
      }
}