"use client";

import Image from "next/image";
import testImg from "../../images/band.jpg";

export default function BandCard() {
  return (
    <article className="relative h-[350px] w-[250px] border-2 border-green group overflow-hidden">
      {/* Image Wrapper */}
      <Image
        src={testImg}
        alt="band image"
        className="h-full w-full object-cover"
      />

      {/* Header */}
      <header className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center">
        <h3>Band Name</h3>
      </header>

      {/* Band Description */}
      <div className="band-desc-container absolute top-full w-full bg-white min-h-full p-4 transition-all duration-500 ease-in group-hover:top-0">
        <h5 className="text-lg font-semibold">Viking</h5>
        <p className="text-sm text-gray-700 mt-2 h-[250px] overflow-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus, nulla nisi laboriosam...
        </p>
      </div>
    </article>
  );
}
