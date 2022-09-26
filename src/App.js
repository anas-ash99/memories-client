import React  from "react";
import {Container } from "@material-ui/core";
import { BrowserRouter as Router,Switch, Routes, useParams, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/profile/Profile";
import AllNofificationsPage from "./components/allNofifications/AllNofificationsPage";
import IndividualPost from "./components/individualPost/IndividualPost";


const App = ()=>{

    return (
        <Router>
            <Container maxWidth ="lg">
               <Navbar/>
               <Switch>
                  <Route path="/post/:postId" component={IndividualPost} exact/>
                  <Route path="/profile" component={Profile} exact/>
                  <Route path="/notifications" component={AllNofificationsPage} exact/>
                  <Route path="/" component={Home} exact /> 
                  <Route path="/auth" component={Auth} exact /> 
               </Switch>
            </Container>
        </Router>
        
        
    )
}

export default App;