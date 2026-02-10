import Icon from "../shared/Icon";

function SuccessIcon() {
  return (
    <div className="relative inline-block mb-3xl">
      <div className="flex justify-center items-center w-24 h-24 bg-accent-base/20 rounded-full animate-scale-in">
        <Icon name="CheckCircle" className="w-14 h-14 text-accent-base" />
      </div>
      <div className="absolute inset-0 w-24 h-24 bg-accent-base/10 rounded-full animate-ping" />
    </div>
  );
}

export default SuccessIcon;
