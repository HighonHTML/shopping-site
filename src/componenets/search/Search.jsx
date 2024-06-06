import { useState } from "react";
import styles from "./Search.module.css";
import { useProducts } from "../../context/ProductContext";

export default function Search() {
  const {searchQuery, setSearchQuery} = useProducts();

  return (
    <input
      className={`${styles.searchBar}`}
      type="text"
      placeholder="Start Shopping"
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
    />
  );
}
