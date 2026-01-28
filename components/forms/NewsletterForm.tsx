function NewsletterForm() {
  return (
    <form
      action=""
      className="flex flex-col md:flex-row items-center gap-sm w-full"
    >
      <div className="flex items-center gap-2 w-full bg-field border border-subtler focus-within:border focus-within:border-accent-strong rounded-sm">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full p-xs bg-field border border-subtle outline-none rounded-sm"
        />
      </div>

      <input type="submit" value="Subscribe" className="main-button shrink-2" />
    </form>
  );
}

export default NewsletterForm;
