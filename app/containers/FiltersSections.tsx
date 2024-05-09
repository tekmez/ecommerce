import React from "react";
import Sort from "../components/SortList/Sort";
import BrandsFilterList from "../components/BrandsFilterList";
import ModelFilterList from "../components/ModelFilterList";

const FiltersSections = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Sort />
      <BrandsFilterList />
      <ModelFilterList />
    </div>
  );
};

export default FiltersSections;
