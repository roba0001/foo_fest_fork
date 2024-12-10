import Link from "next/link";

export default function Button({ href, buttonText }) {
  return (
    <Link
      href={href}
      className="px-8 py-2 w-fit bg-buttonBackgroundColor text-white h-40 w-30 rounded-full text-xl transition-bg duration-150 ease-in hover:bg-buttonHoverBackgroundColor"
    >
      {buttonText}
    </Link>
  );
}
