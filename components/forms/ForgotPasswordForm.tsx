import Icon from "../shared/Icon";

function ForgotPasswordForm() {
  return (
    <form action="" className="flex flex-col items-center gap-lg w-full">
      <div className="flex flex-col gap-md w-full">
        <div className="flex flex-col gap-xs w-full">
          <label htmlFor="email" className="text-sm">
            Email
          </label>

          <div className="flex items-center gap-2 p-xs bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
            <Icon name="Mail" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>

      <input type="submit" value="Send Reset Link" className="main-button" />
    </form>
  );
}

export default ForgotPasswordForm;
