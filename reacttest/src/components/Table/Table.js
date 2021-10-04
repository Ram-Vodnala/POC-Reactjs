import React from 'react';
   
import axios from 'axios';
  
export default class Table extends React.Component {
  state = {
    posts: []
  }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }
  
  render() {
    return (
      <div>
        <h1>This is Test Data</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
            {this.state.posts.map((post,index) => (
              <tr key={index}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>
    )
  }
} 