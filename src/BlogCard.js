import React, { useState } from "react";

import { dumpLogs } from "./Utils";

import classes from "./BlogCard.module.css";

function BlogCard(props) {
  //   dumpLogs(props);
  // const [count, setCount] = useState(0);

  // const onLikeBtnClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className={classes.BlogCard} key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <p>
        Like Count: <span className={classes.LikeCount}>{props.likeCount}</span>
      </p>
      <button onClick={props.onLikeBtnClick}>Like</button>
    </div>
  );
}

export default BlogCard;
