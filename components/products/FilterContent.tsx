import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import AvailabilityFilter from "./AvailabilityFilter";

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
