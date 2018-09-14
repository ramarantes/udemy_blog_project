import React from 'react'
import {BrowserRouter, Route, Switch  } from 'react-router-dom';

import PostIndex from './components/posts_index'
import PostNew from './components/posts_new'
import PostShow from './components/post_show'
import Messages from './components/message';


export default () => {
    return (<BrowserRouter>
<div>
<Messages message="ola"/>
<Switch>
    <Route path="/post/new" component = {PostNew} />  
    <Route path="/post/:id" component = {PostShow} />
    <Route path="/" component = {PostIndex} />
    
</Switch>
</div>

</BrowserRouter>)
}