import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import Store from "./components/store/Store";
import Admin from "./components/admin/Admin";
import PostEditor from "./components/postEditor/PostEditor";
import Landingpage from "./components/Landingpage/Landingpage";
import Products from "./Products/Products"; 
import IndividualProducts from "./components/IndividualProducts/IndividualProducts";


export default (
  <Switch>
    <Route path="/" exact component={Landingpage} />
    <Route path="/home/:user_id/:user_logo" component={Home}/>
    <Route path="/blog/:user_id/:user_logo" component={Posts} />
    <Route path="/store/:user_id/:user_logo" component={Store} />
    <Route path="/user" component={Admin}/>
    <Route path="/editblog" component={PostEditor}/>
    <Route path="/editproducts" component={Products}/>
    <Route path="/product/:user_id/:product_id" component={IndividualProducts}/>
  </Switch>
);