import React, { Component } from "react";
import "./App.css";
import Contacts from "./Contacts";


class App extends Component {


  render() {

   

    return (
<div> <Contacts/></div>
 
    );
  }
}


// <div>
// <h1>IronContacts</h1>
// <div>
// {allContacts.map((item, idx) => (
// <p key={item.id}> 
// {item.name}, 
// {item.picture},
// {item.popularity}</p>
// ))}
// </div>
// </div>





export default App;
