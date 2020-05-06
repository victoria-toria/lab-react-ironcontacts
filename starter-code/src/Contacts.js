import React, { Component } from "react";
import contacts from "./contacts.json";

class Contacts extends Component {
  state = {
    contactsData: contacts,
  };


  render(){
let allContacts = this.state.contactsData.map(item => {
 const {name, picture, popularity } = item
 return (<div>

 
  <td>{name}</td>
    <td>{picture}</td>
    <td>{popularity}</td>

  
 </div>)
})



return (
    <div>

  <table>
  <tr>
    <th>Name</th>
    <th>Picture</th>
    <th>Popularity</th>
  </tr>
  <tr>

    <td>{allContacts}</td>

  </tr>
</table>
</div>
)}}

export default Contacts;