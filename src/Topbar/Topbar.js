import React from "react";

import classes from "./Topbar.module.css";

const Topbar = () => {
  return (
    <header className="App-header">
      <nav className={classes.Topbar}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmark.trademarkia.com%2Flogo-images%2Fezmarai-arbab%2Fsmart-watch-85782244.jpg&f=1&nofb=1&ipt=72e37df41a326ec95b266a9b4483135a6771c58c4485708248c4a728e5e65284&ipo=images"
          alt="Smart Watch"
        ></img>
      </nav>
    </header>
  );
};

export default Topbar;
