"use client";

import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import useGridPreviewStore from "@/lib/stores/grid-preview.store";
import { cn } from "@/lib/utils";

const columns: {
  id: number;
  icon: React.ComponentProps<typeof Icon>["name"];
  count: 2 | 3 | 4;
}[] = [
  { id: 1, icon: "Columns2", count: 2 },
  { id: 2, icon: "Columns3", count: 3 },
  { id: 3, icon: "Columns4", count: 4 },
];

function ProductsGridViewSelector() {
  const { count, setCount } = useGridPreviewStore();

  return (
    <div className="flex items-center gap-tiny py-tiny px-xs bg-surface rounded-md">
      {columns.map((col) => (
        <Button
          key={col.id}
          variant="plain"
          className={cn(
            "text-muted-foreground hover:text-accent-base",
            count === col.count && "text-accent-base",
          )}
          onClick={() => setCount(col.count)}
        >
          <Icon name={col.icon} className="text-current" />
        </Button>
      ))}
    </div>
  );
}

export default ProductsGridViewSelector;
