import React,{Component} from 'react';
import CardLists from './CardLists';
import SearchBoxes from './SearchBoxes';
import {robots} from './robots';

class Apps extends Component {
  constructor(){
    super()
    this.state={
      robots:robots,
      searchfield:""

    }
  }
  render(){
    return(
      <div className="tc">
      <h1 className="f1 tc">RoboFriends</h1>
        <SearchBoxes/>
        <CardLists/>
      </div>
      
    )
  }
  

}
export default Apps;