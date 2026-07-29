import AppImage from "./AppImage";

function Logo() {
  return (
    <div className="flex justify-center items-center gap-xs select-none bg-accent-base px-xs rounded-md">
      <AppImage
        productImage="/images/logo.png"
        altText="Athlo"
        width={160}
        height={40}
      />
    </div>
  );
}

export default Logo;
