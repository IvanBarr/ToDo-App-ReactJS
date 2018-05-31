import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import EditItem from './components/EditItem';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isHidden: true,
      itemToEdit: '',
      items: [
        {
          value: 'Code',
          time: '9:00',
          key: 1,
          finished: false
        },
        {
          value: 'Eat',
          time: '12:00',
          key: 2,
          finished: false
        },
        {
          value: 'Go shoppping',
          time: '1:00',
          key: 3,
          finished: false
        }
      ],
      toDosLeft: [
        {
          value: 'Code',
          time: '9:00',
          key: 1,
          finished: false
        },
        {
          value: 'Eat',
          time: '12:00',
          key: 2,
          finished: false
        },
        {
          value: 'Go shoppping',
          time: '1:00',
          key: 3,
          finished: false
        }
      ]
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.countToDosLeft = this.countToDosLeft.bind(this);
  }

  addItem(e){
    e.preventDefault();
    if(this.itemInput.value !== ''){
      let newItem = {
        value: this.itemInput.value,
        time: this.timeInput.value,
        key: Date.now()
      }
      this.setState({
        items: this.state.items.concat(newItem),
        toDosLeft: this.state.toDosLeft.concat(newItem)
      })
      this.itemInput.value = '';
      this.timeInput.value = '00:00';
    }
  }

  deleteItem(itemKey){
    let filteredItems = this.state.items.filter(item => {
      return (item.key !== itemKey);
    })

    let filteredToDosLeft = this.state.items.filter(item => {
      return (item.key !== itemKey && !item.finished);
    })

    this.setState({
      items: filteredItems,
      toDosLeft: filteredToDosLeft
    })
  }


  toggleEdit(itemIndex){
    this.setState({
      isHidden: false
    })


    let item = this.state.items.slice();
    let itemToEdit = item[itemIndex];
    this.setState({
      itemToEdit: itemToEdit
    })
  }

  closeEdit(){
    this.setState({
      isHidden: true,
    })
  }

  saveEdit(newValue){
   
    this.setState({
      isHidden: true
    })
    var newItemValue = newValue;
    if(newItemValue.length > 1){
      this.setState({
        itemToEdit: this.state.itemToEdit.value = newItemValue,
        item: this.state.itemToEdit
      })
    }                                      
  }

  countToDosLeft(index){
    let item = this.state.items.slice();
    let finishedItem = item[index].finished = !item[index].finished;

    this.setState({
      item: finishedItem
    })

    let toDosLeft = this.state.items.filter(item => {
        return !item.finished;
    })

    this.setState({
      toDosLeft: toDosLeft
    })
  }

  render() {
    return (
      <div className="App">
        <Header toDosLeft={this.state.toDosLeft}/>
        <form className="addItemForm" onSubmit={this.addItem}>
          <div className="inputs">
            <input className="itemInput" type="text" ref={(a) => this.itemInput = a} placeholder="Please enter a value..." />
            <input className="timeInput" type="text" ref={(a) => this.timeInput = a} defaultValue="00:00"/>
          </div>
          <button>Add</button>
        </form>

        <ReactCSSTransitionGroup
          transitionName="popIn"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {this.state.isHidden ? null : <EditItem saveEdit={this.saveEdit} closeEdit={this.closeEdit} itemToEditValue={this.state.itemToEdit.value}/>}
        </ReactCSSTransitionGroup>
        
        <TodoList items={this.state.items} deleteItem={this.deleteItem} toggleEdit={this.toggleEdit} toDosLeft={this.countToDosLeft}/>
      </div>
    );
  }
}

export default App;
