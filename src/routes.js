import {Switch, Route} from 'react-router-dom'
import Auth from './component/Auth/Auth'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Post from './component/Post/Post'
import React from 'react'

export default function Routes(){
    return (
        <Switch>
            <Route path ="/dashboard" component= {Dashboard} />
            <Route path ="/post/:postid" component= {Post} />
            <Route path ="/new" component= {Form} />
            <Route path= "/" component= {Auth}/>
        </Switch>
    )
}