import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveFilter } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";

import styles from "./postFilter.module.scss";

const PostFilter = () => {
  const activeFilter = useSelector((state: RootState) => state.filter.idFilter);
  const dispatch = useDispatch();

  const filtersItems = ["All", "Documents", "Help", "Family"];

  return (
    <div className={styles.postFilter}>
      {filtersItems.map((filter, i) => (
        <span
          key={i}
          onClick={() => dispatch(setActiveFilter(i))}
          className={
            activeFilter === i ? ` ${styles.activeFilter}` : styles.filterItem
          }
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default PostFilter;
