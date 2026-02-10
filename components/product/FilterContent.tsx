import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import AvailabilityFilter from "./AvailabilityFilter";

function FilterContent() {
  return (
    <div className="">
      <CategoryFilter />

      <PriceRangeFilter />

      <SizeFilter />

      <ColorFilter />

      <AvailabilityFilter />
    </div>
  );
}

export default FilterContent;
