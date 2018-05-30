import React, { Component } from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="MyDay">
                    <h2>My Day</h2>
                    <p>{new Date().getMonth() + 1}/{new Date().getDate()}/{new Date().getFullYear()}</p>
                </div>
                <div className="todos-left">
                    <p>To Do's left: {this.props.toDosLeft.length}</p>
                </div>
            </div>
        )
    }
}

export default Header;