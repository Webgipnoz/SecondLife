import React, { useState } from "react";

import "../../scss/header/postFilter.scss";

const PostFilter = () => {
  const [activeFilter, setActiveFilter] = useState(0);

  const filtersItems = ["All", "Documents", "Help", "Family"];

  const onClickFilter = (index: number) => {
    setActiveFilter(index);
  };

  return (
    <div className="post-filter container">
      {filtersItems.map((filter, i) => (
        <span
          onClick={() => onClickFilter(i)}
          className={
            activeFilter === i ? "filter-item active-filter" : "filter-item"
          }
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default PostFilter;
