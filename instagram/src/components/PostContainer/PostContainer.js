import React from "react";
import CommentSection from "../CommentSection/CommentSection"
import Post from "./Post"

const PostContainer = props => {
  const post = props.postData.map(post => {
    return (
      <div>
        <Post post={post} />
        <CommentSection comments={post.comments} />
      </div>
      
    )
  })

  

  // console.log(props.postData.map(post => {
  //   return post
  // }))

  return (
    <div>
      {post}
    </div>
  );
}


export default PostContainer;