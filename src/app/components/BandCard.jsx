import Image from "next/image";
import testImg from "../../images/band.jpg";

export default function BandCard() {
  return (
    <article className="overflow-hidden relative h-[350px] w-[250px] border-2 border-green group">
      <div className="h-full">
        <Image
          src={testImg}
          alt="band image"
          className="h-full w-full object-cover"
        />
      </div>

      <header className="absolute bottom-2 left-[50%] translate-x-[-50%] text-white text-center">
        <h3 className="whitespace-nowrap">Band Name</h3>
      </header>

      <div className="band-desc-container w-full bg-white absolute top-full min-h-full transition-all duration-500 ease-in group-hover:top-0 p-4 h-fit">
        <h5 className="text-lg font-semibold">Viking</h5>
        <div className="container band-desc-text-container overflow-auto scroll-hide">
          <p className="text-sm text-gray-700 mt-2 h-[250px]"></p>
        </div>
      </div>
    </article>
  );
}
