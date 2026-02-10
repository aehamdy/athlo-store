import Link from "next/link";
import Icon from "../shared/Icon";
import endpoints from "@/lib/endpoints";

function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-fade-in">
      <Link
        href={endpoints.products}
        className="group flex justify-center items-center gap-sm w-full sm:w-fit p-sm font-medium text-primary-dark bg-accent-base hover:bg-accent-soft transition-colors duration-normal rounded-md"
      >
        Continue Shopping
        <Icon
          name="ArrowRight"
          className="flex justify-center items-center w-4 h-4 text-primary-dark group-hover:translate-x-1 transition-transform duration-normal"
        />
      </Link>

      <Link
        href={endpoints.home}
        className="flex justify-center items-center p-sm font-medium hover:text-primary-dark bg-base hover:bg-accent-soft border border-subtle rounded-md transition-colors duration-normal"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ActionButtons;
