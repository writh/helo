import React, { Component } from 'react';


function Nav(props) {
    let nav;
    if (props.location.pathname !== '/'){
        nav = <div>Nav</div>
    }
    return (
        <div>
        {nav}
        </div>
    )



}

export default Nav;