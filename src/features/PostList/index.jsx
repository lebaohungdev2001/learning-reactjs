import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  PostList: PropTypes.array,
};
PostList.defaultProps = {
  PostList: [],
};

function PostList(props) {
  const { PostList } = props;
  return (
    <div>
      <ul>
        {PostList.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
