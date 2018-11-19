import React, { Component } from 'react';


class Userinfo extends Component {

  constructor(){
    super();
    this.state = {
      items : [],
      isLoaded : false,
      showIt : false
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
        showIt: false
      })
    })
  this.onClick =this.onClick.bind(this);
  }
  onClick(e){
    e.preventDefault()
    this.setState({
    showIt : true
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
                        <a class="active" href="#Overview">Overview</a>
                        <a href="#Repositories">Repositories </a>
                        <a href="#Stars" onClick={this.onClick}> Stars </a>
                        <a href="#Followers">Followers </a>
                        <a href="#Following">Following </a>
                </div>

                <div id="Overview">
                       <ul>
                          {items.map(item => (
                               <li key={item.id} >
                                {item.name}
                               </li>
                            ))}
                       </ul>
                 </div>
                  <div id="Repositories">
                         <ul>
                             <li> Detailed info about Repositories </li>
                         </ul>
                  </div>

                  <div id="Stars" style={{display : this.state.showIt ? 'block':'none'}}>
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
