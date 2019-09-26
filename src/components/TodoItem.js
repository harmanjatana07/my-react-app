import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () =>{
        return{
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            backgroundColor:'#333',
            color: 'white',
            textDecoration: this.props.todo.completed?'line-through':'none'
        }
    }


    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{'  '} 
                    {title}
                    <button style={btnStyle} onClick={this.props.delete.bind(this,id)}>
                        &times;
                    </button>  
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background:'#FF0000',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor : 'pointer',
    float : 'right'
}

//type of props of component
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delete : PropTypes.func.isRequired
}


export default TodoItem
