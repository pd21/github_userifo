import React, { Component } from 'react';


class Userinfo extends Component {

  constructor(){
    super();
    this.state = {
      items : [],
      isLoaded : false,
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users/' + this.props.user +'/repos')
    .then(res => res.json())
    .then(json => {
    //  console.log(JSON.stringify(json))
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }

  render(){
   var {isLoaded,items} = this.state;
     console.log(Array.isArray(items));

     if (!isLoaded) {
                return (
                  <div >
                  LOading ...
                  </div>
                )
      }
     else{
      return(
        <div className="main_home">
                 Data has been loaded
                 <div class="topnav" id="myTopnav">
                    <a class="active" href="#home">Home </a>
                    <a href="#news">News </a>
                    <a href="#contact">Contact </a>
                    <a href="#about">About </a>
                </div>

                <div id="news">
                 <ul>
                    {items.map(item => (
                         <li key={item.id} >
                          {item.name}
                         </li>
                      ))}
                 </ul>
                 </div>


                 <div id="contact">
                  <ul>
                    <li>priyanka</li>
                    <li>pd</li>
                    <li>pdey</li>
                    <li>pdee</li>
                  </ul>
                  </div>
        </div>
      )
    }
  }
}


export default Userinfo;
