import React,{Component} from 'react';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:"",
    }
  }
//checks if its mounted then fetches the json file
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {return response.json();} )
    .then(users => { this.setState({robots:users})} )
    
  }
//sets the state once the search bar changes
  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value});
  }
//renders to the screen
  render(){
    const filteredRobots = this.state.robots.filter(robots => {
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    
    return(
      <div className="tc">
      <h1 className="f2 tc">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
  

}
export default App;