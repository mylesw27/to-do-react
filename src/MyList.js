import React, { Component } from 'react'
import './MyList.css'
import ListItem from './ListItem'


class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem: ""
  }
  
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    }) 
  }

  addItem = (e) => {
    e.preventDefault()

    this.setState(previousState => {
      return {
        taskArray: [...previousState.taskArray, previousState.newItem],
        newItem: ''
      }
    })
  }
  
  
  clearList = () => {
    console.log(this.state.taskArray)
    this.setState({
      taskArray: []
    })
  }

  render() {
    let todoItems = this.state.taskArray.map((item, i) => {
      return (
        <ListItem 
          task={item} 
          key={i}
          handleRemoveClick={() => {
            console.log("you need to remove list item + 1")
            this.setState(prevState => {
              // make a copy of the state array so we don't modify it directly
              const taskArrayCopy = [...prevState.taskArray]
              // use splice to remove this list item from the state array copy
              taskArrayCopy.splice(i, 1)
              // update state
              return {
                taskArray: taskArrayCopy
              }

            })
          }} 
        />
      )
    })
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor="newItem">New Item:</label>
          <input id="newItem" type='text' value={this.state.newItem} onChange={this.handleChange} />
          <button type="submit">Add to List</button>
        </form>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Finished the list!</button>
      </div>
    )
  }
}


export default MyList