import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackArrow({ href }) {
  return (
    <Link href={href}>
      <FaArrowLeftLong
        size={30}
        className="mt-8 mb-12 transition-text duration-150 ease-in hover:text-orange-300"
      />
    </Link>
  );
}
