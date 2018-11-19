import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

const api ="https://api.github.com/users/pd21";

class UserMain extends Component {

  constructor(props){
    super(props);

    this.state = {
      users:'',
      isLoading:false,
    }
  }
  componentDidMount(){

    axios.get(api)
    .then( json => {
      console.log("*******",JSON.stringify(json))
      this.setState({
        isLoading:true,
        users : json
      })
    })
    .catch(error => console.log("some errorr"));
  }

  render(){

      var {isLoading,users} = this.state;
         if(!isLoading){
           return(
                 <div> HELLO </div>
               )
               }
               else{
                 return(
                <div className="about_user">
                  User data loaded
                  <ul>
                      <li>
                      <img src={users.data.avatar_url} width="55%" height="75%"/>
                      <div id="user_name">{users.data.name}</div>
                      <div id="user_login">  {users.data.login} </div>
                      <div id="user_bio">  {users.data.bio} </div>
                      {users.data.company}
                      </li>
                  </ul>
                 </div>
               )
               }


  }
}


export default UserMain;
