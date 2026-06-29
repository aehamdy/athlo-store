import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";

function ReviewsSectionHeader() {
  return (
    <div className="space-y-xs">
      <Heading as="h2" className="font-bold text-xl text-foreground">
        Customer Reviews
      </Heading>

      <div className="flex items-center gap-xs">
        <div className="flex items-center gap-xs">
          <div className="flex items-center gap-tiny">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Icon
                key={idx}
                name="Star"
                size={18}
                className="fill-accent-base text-accent-base"
              />
            ))}
          </div>

          <p className="font-medium text-foreground">4.5</p>
        </div>

        <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>

        <div className="text-muted-foreground">Based on 2 reviews</div>
      </div>
    </div>
  );
}

export default ReviewsSectionHeader;
