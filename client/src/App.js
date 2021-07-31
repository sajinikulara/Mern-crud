//class components
import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

constructor(props){
  super(props);

  this.state={
    post:[]
  };
}


//components and subcomp render after
componentDidMount(){
  this.retrivePosts();
}

retrivePosts(){
  axios.get("http://localhost:8000/post").then(res =>{
    if(res.data.sucess){
      this.setState({
        post:res.data.existingPost
      });

      console.log(this.state.post)
    }
  });
}
  render(){
    return(
      <div>
          {this.state.post.map(post =>{
            <div>
              <p>{post.topic}</p>
              <p>{post.decription}</p>
            </div>
          })}

      </div>
    )
  }
}