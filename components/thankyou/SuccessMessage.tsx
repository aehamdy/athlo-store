import Heading from "../shared/Heading";

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center gap-tiny">
      <Heading
        as="h1"
        className="mb-md font-bold text-3xl md:text-4xl animate-fade-in"
      >
        Congratulations!
      </Heading>

      <p className="mb-xs text-center text-xl text-muted-foreground animate-fade-in">
        Your order has been successfully placed
      </p>

      <p className="mb-3xl text-center text-muted-foreground animate-fade-in">
        We&apos;ll send you an email with order details and tracking information
      </p>
    </div>
  );
}

export default SuccessMessage;
