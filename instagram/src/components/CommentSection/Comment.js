import React, {Fragment} from "react"

const Comment = props => {
  return <Fragment>
      <p>
        <strong>{props.username}</strong> {props.text}
      </p>
    </Fragment>;
}

export default Comment;