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
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
        </table>
      </div>
    )
  }
} 