import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {
        posts: [],
        tags: [],
      }
    }
  }

  componentDidMount() {
    fetch("/blog.json").then(function(resp) {
      return resp.json()
    }).then((blob) => {
      console.log('hey there');
      console.log(blob);
      this.setState({
        blog: blob
      });
    })
  }

  render() {
    console.log('in render');
    return (
      <div className="App">
        <p>Hey, it's Nick's blog</p>
        <div id="posts">
          {
            this.state.blog.posts.map(function(post) {
              return <Post key={post.title} title={post.title} body={post.body} />
            })
          }
        </div>
      </div>
    );
  }
}

class Post extends Component {
  render() {
    return (
        <div className="post">
          <h1 className="title">{this.props.title}</h1>
          <p className="body">
            {this.props.body}
          </p>
        </div>
    );
  }
}

export default App;
