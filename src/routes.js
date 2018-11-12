import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import Store from "./components/store/Store";
import Admin from "./components/admin/Admin";
import PostEditor from "./components/postEditor/PostEditor";
import Landingpage from "./components/Landingpage/Landingpage";


export default (
  <Switch>
    <Route path="/" exact component={Landingpage} />
    <Route path="/home/:user_id" component={Home}/>
    <Route path="/blog" component={Posts} />
    <Route path="/store" component={Store} />
    <Route path="/user" component={Admin}/>
    <Route path="/editblog" component={PostEditor}/>
  </Switch>
);