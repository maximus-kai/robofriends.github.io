import React ,{Component}from 'react';
import './Hello.css';

// class Hello extends Component{
//   render(){
    // return(
    //   <div className="tc f1">
    //     <h1>Hello Max</h1>
    //     <p>what's good?</p>
    //     <p>{this.props.greeting}</p>
    //   </div>

    // )
//   }
// }
const Hello = (props) => {
  return(
    <div className="tc f1">
      <h1>Hello Max</h1>
      <p>what's good?</p>
      <p>{props.greeting}</p>
    </div>

  )

}
export default Hello;