import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

/* 
===== POST HEADER STYLED COMPONENTS =====
*/
const PostHeaderContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 0.5% 2% 0.5% 2%;
  align-items: center;
  justify-content: space-between;
`;

const HeaderProfileDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ThumbnailImage = styled.img`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  margin-right: 10%;
`;

const EllipsisDiv = styled.div`
  transform: rotate(90deg);
  font-size: 1.1rem;
`;


const PostHeader = props => {
  const {thumbnail, username} = props
  console.log(props.thumbnail)
  return <PostHeaderContainer>
      <HeaderProfileDiv>
        <ThumbnailImage src={thumbnail} alt={`${username}'s thumbnail`} />
        <h3>{username}</h3>
      </HeaderProfileDiv>

      <EllipsisDiv>
        <span>
          <i className="fas fa-ellipsis-v" />
        </span>
      </EllipsisDiv>
    </PostHeaderContainer>;
};


PostHeader.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
  })
};



export default PostHeader;


