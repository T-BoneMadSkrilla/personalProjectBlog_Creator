import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import Store from "./components/store/Store";
import Admin from "./components/admin/Admin";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/blog" component={Posts} />
    <Route path="/store" component={Store} />
    <Route path="/user" component={Admin}/>
  </Switch>
);