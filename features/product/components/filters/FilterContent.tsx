import CategoryFilter from "./CategoryFilter";

import ColorFilter from "./ColorFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import SizeFilter from "./SizeFilter";

function FilterContent() {
  return (
    <>
      <CategoryFilter />

      <PriceRangeFilter />

      <SizeFilter />

      <ColorFilter />

      <AvailabilityFilter />
    </>
  );
}

export default FilterContent;
