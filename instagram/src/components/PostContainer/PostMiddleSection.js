import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

/*
===== POST COMPONENTS STYLED COMPONENTS =====
*/

const MiddleContainer = styled.div`
  padding: 1% 0 0 2%;
`;

const SymbolContainer = styled.div`
  display: flex;
  margin-bottom: -15px;
  font-size: 1.6rem;
`;

const SymbolItem = styled.div`
  margin-right: 2%;

  .like {
    cursor: pointer;
  }

  .like:active {
    color: gray;
  }
`;

/*
  === POST MIDDLE SECTION COMPONENT
*/

const PostMiddleSection = props => {
  const { likes, timestamp } = props;

  return (
    <MiddleContainer>
      <SymbolContainer>
        <SymbolItem onClick={() => props.addLikes(timestamp)}>
          <i className="far fa-heart like" />
        </SymbolItem>
        <span>
          <i className="far fa-comment" />
        </span>
      </SymbolContainer>
      <h4>{likes} likes</h4>
    </MiddleContainer>
  );
};

PostMiddleSection.propTypes = {
  props: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string,
    addLikes: PropTypes.func
  })
};

export default PostMiddleSection;
