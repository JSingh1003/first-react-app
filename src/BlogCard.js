import React from "react";

import { dumpLogs } from "./Utils";

import classes from "./BlogCard.module.css";

const BlogCard = (props) => {
  //   dumpLogs(props);
  return (
    <div className={classes.BlogCard} key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default BlogCard;
