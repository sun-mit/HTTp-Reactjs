import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             posts: []
              
         }
     }
     componentDidMount(){
        axios.get('https://dummyapi.io/data/api/post', {
         headers: {
           "app-id": "60a38125aa96dc076d0ca21b",
         },
       })
          .then(response => {
              this.setState({posts: response.data.data})
          })
          .catch(error => {
           console.error(error)
          })
    }
     
     
    render() {
        const { posts } = this.state

        console.log(posts)

        return (
            <div>
                {posts.length !== 0 &&  posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.text}</h2>
                    </div>
                ))}

                
            </div>
        )
    }
}

export default PostList
