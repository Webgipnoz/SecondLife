import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveFilter } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";

import "../../scss/postFilter/postFilter.scss";

const PostFilter = () => {
  const activeFilter = useSelector((state: RootState) => state.filter.idFilter);
  const dispatch = useDispatch();

  const filtersItems = ["All", "Documents", "Help", "Family"];

  return (
    <div className="post-filter container">
      {filtersItems.map((filter, i) => (
        <span
          key={i}
          onClick={() => dispatch(setActiveFilter(i))}
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
