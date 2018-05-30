import React, { Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class TodoList extends React.Component{
    constructor(props){
        super(props);


        this.delete = this.delete.bind(this);
        this.editText = this.editText.bind(this);

    }
    delete(itemKey){
        this.props.deleteItem(itemKey);
    }
    editText(itemKey){
        this.props.editItem(itemKey);
    }

    render(){
        return(
            <div>
                <ul className="toDoList">
                    <ReactCSSTransitionGroup
                        transitionName="slideIn"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={500}
                    >
                    {
                        this.props.items.map((item, i) => {
                            return(
                                <li key={item.key} style={(item.finished ? {textDecoration: 'line-through', color: 'lightgreen'} : {textDecoration: 'none', color: ''})}>
                                    <span className="itemTime">{item.time}</span>
                                    {item.value}
                                    <button className="finished" onClick={() => this.props.toDosLeft(i)}><i className="fas fa-check"></i></button>
                                    <button className="delete" onClick={() => this.delete(item.key)}><i className="fas fa-trash"></i></button>
                                    <button className="edit" onClick={() => this.props.toggleEdit(i)}><i className="fas fa-pencil-alt"></i></button>
                                </li>
                            )
                        })
                    }
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )
    }
}

export default TodoList;
