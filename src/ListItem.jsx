import React, { Component } from 'react'
import './ListItem.css'

class ListItem extends Component {
    state = {
        completed: false
    }
    handleComplete = () => {
        this.setState(prevState => {
            return {
                completed: !prevState.completed
            } 
        })
    }
    render() {
        return (
        <div>
            <li>
                    {this.props.task}
                    <button onClick={this.handleRemoveClick}>Done!</button>
            </li>
        </div>
        )
    }
}

export default ListItem 