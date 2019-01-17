import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader";
import PostMiddleSection from "./PostMiddleSection";

import styled from "styled-components";
import "./posts.css";

/* 
===== POST STYLED COMPONENTS =====
*/

const PostMainImage = styled.img`
  width: 100%;
`;

/* 
==== POST COMPONENT ====
*/

const Post = props => {
  const { post } = props;
  // console.log(post);
  return (
    <div>
      <PostHeader username={post.username} thumbnail={post.thumbnailUrl} />
      
      <PostMainImage src={post.imageUrl} alt={`${post.username}`} />
      
      <PostMiddleSection
        addLikes={props.addLikes}
        likes={post.likes}
        timestamp={post.timestamp}
      />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string
  })
};

export default Post;
