import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/layout/header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos';
import About from './components/pages/about'
import axios from 'axios';

class App extends React.Component {
   state = {
     todos:[]
   }

   componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then((res)=>{
      this.setState({todos:res.data});
    })  
   } 

   markComplete = (id) =>{
    this.setState({todos:this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed = !todo.completed;
      }
      return todo;
    })});
   }

   delete=(id)=>{
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
      this.setState({todos:this.state.todos.filter((todo)=>{
        if(todo.id!==id){
          return todo;
        }else{
          return null;
        }
      })})
     })
   }

   addTodo = (title) => {
     const newTodo = {
       title : title,
       completed: false
     }
     axios.post('https://jsonplaceholder.typicode.com/todos', newTodo).then((res) => {
      this.setState({todos:[...this.state.todos, res.data]});
     })     
   }


  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}/>
              </React.Fragment>
            )}/>
           <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
