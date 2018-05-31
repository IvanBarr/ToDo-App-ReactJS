import React, { Component } from 'react';

class EditItem extends React.Component{
    constructor(props){
        super(props);

        this.saveNewItemValue = this.saveNewItemValue.bind(this);
    }

    saveNewItemValue(e){
        e.preventDefault();
        let newValue = this.editInput.value;
        this.props.saveEdit(newValue);
    }

    render(){
        return(
            <form className="editItemForm" onSubmit={this.saveNewItemValue}>
                <input type="text" className="editInput" defaultValue={this.props.itemToEditValue} ref={(a) => this.editInput = a}/>
                <div className="editItem_btns">
                    <button type="button" className="cancleEdit_btn" onClick={() => this.props.closeEdit()}>Cancel</button>
                    <button className="saveEdit_btn">Save</button>
                </div>
            </form>
        )
    }
}

export default EditItem;