"use client";

import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import useDeleteReview from "../hooks/useDeleteReview";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ReviewItemActionsProps = {
  reviewId: number;
};

function ReviewItemActions({ reviewId }: ReviewItemActionsProps) {
  const { id: productId } = useParams<{ id: string }>();

  const { mutate: deleteReview, isPending } = useDeleteReview(productId);

  return (
    <div className="flex flex-col gap-xs">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="plain"
            className="group text-muted-foreground hover:bg-red-500/10"
          >
            <Icon name="Trash2" className="group-hover:text-red-500" />
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent size="sm" className="">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex flex-col items-center gap-sm">
              <span className="p-sm bg-accent-light rounded-full">
                <Icon name="Trash2" size={26} className="" />
              </span>

              <span className="text-foreground">Delete this review?</span>
            </AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone. Your review will be permanently
              deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="text-foreground">
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              disabled={isPending}
              onClick={() => deleteReview(reviewId)}
            >
              {isPending ? "Deleting..." : "Yes"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button
        variant="plain"
        className="group text-muted-foreground hover:text-bg-blue-500 hover:bg-blue-500/10"
        onClick={() => {}}
      >
        <Icon name="Pen" className="group-hover:text-blue-500" />
      </Button>
    </div>
  );
}

export default ReviewItemActions;
