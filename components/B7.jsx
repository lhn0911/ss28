import React, { Component } from 'react';
import Post from './B7con.jsx';

class ListPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: 1, title: 'Tiêu đề', content: 'Nội dung', author: 'Tác giả' },
        { id: 2, title: 'Tiêu đề', content: 'Nội dung', author: 'Tác giả' },
        { id: 3, title: 'Tiêu đề', content: 'Nội dung', author: 'Tác giả' },

      ]
    };
  }

  render() {
    return (
      <div>
        <h1>List of Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default ListPost;
