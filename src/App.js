import React,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Max', age:22},
      {name:'Jose', age:23},
      {name:'Deb', age:34},
    ],
    showPersons:false
  }

  switchNameHandler = (newName) =>{
    // console.log('was clicked')
    // this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons:[
        {name: newName, age:32},
        {name:'Jose Sa', age:43},
        {name:'Debian', age:34},
      ]
    })
  }

  nameHandler = (event) => {
    this.setState({
      persons:[
        {name:'Max', age:22},
        {name:event.target.value, age:23},
        {name:'Deb', age:34},
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hello world</h1>
        <p>hi again</p>
        <button 
        style={style}
        onClick={ this.togglePersonsHandler } >Switch Name</button>
        {this.state.showPersons ?
        <div>
          <Person 
            name = {this.state.persons[0].name} 
            age ={this.state.persons[0].age}/> 
          <Person 
            name = {this.state.persons[1].name} 
            age ={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Max!!!')}
            changed={this.nameHandler}> My hobby: Racing </Person> 
          <Person 
            name = {this.state.persons[2].name} 
            age ={this.state.persons[2].age}/> 
        </div>:null
        }
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Its working now?'))
  }
}

export default App;
