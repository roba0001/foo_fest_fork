export default function FormButton({ href, buttonText }) {
  return (
    <button
      href={href}
      type="submit" // This ensures it triggers the form submission
      className="max-h-fit px-8 py-2 w-fit bg-buttonBackgroundColor text-white  w-30 rounded-full text-xl transition-bg duration-150 ease-in hover:bg-buttonHoverBackgroundColor"
    >
      {buttonText}
    </button>
  );
}
