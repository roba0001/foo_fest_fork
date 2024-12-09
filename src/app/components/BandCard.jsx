import Image from 'next/image'
import testImg from '../../images/band.jpg'

export default function BandCard()
{
    return (
        <article className="overflow-hidden relative h-[350px] w-[250px] border-2 border-green group">
            {/* Image Wrapper */}
            <div className="h-full">
                <Image
                    src={testImg}
                    alt="band image"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Header */}
            <header className="absolute bottom-2 left-[50%] translate-x-[-50%] text-white text-center">
                <h3 className="whitespace-nowrap">
                    Band Name
                </h3>
            </header>

            {/* Band Description */}
            <div className="band-desc-container w-full bg-white absolute top-full min-h-full transition-all duration-500 ease-in group-hover:top-0 p-4 h-fit">
                <h5 className="text-lg font-semibold">
                    Viking
                </h5>
                <div className="container band-desc-text-container overflow-auto scroll-hide">
                    <p className="text-sm text-gray-700 mt-2 h-[250px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nulla nisi laboriosam, molestiae, iure error praesentium excepturi voluptates sit quisquam ullam quaerat inventore voluptate autem distinctio eligendi aperiam blanditiis nostrum at quasi in! Fugit atque pariatur sequi asperiores sed soluta ex necessitatibus deserunt quas in, nulla quam eligendi voluptatum itaque nisi. Hic nisi dolores, consectetur provident odio eligendi repudiandae, ex illum tempore distinctio quis praesentium omnis optio natus expedita eos voluptas! Modi deserunt ut sit temporibus aliquid. Commodi, assumenda aut id similique totam corporis eaque non est delectus fugiat consequatur accusantium eius laborum, illum modi cum reiciendis magnam voluptates velit voluptatum placeat animi. Ut, ratione suscipit id quisquam minus vitae dolorum quidem iste reprehenderit repellat. Eveniet quibusdam tenetur dolorum debitis distinctio reprehenderit pariatur id. Nostrum rem magnam commodi consequuntur odio quae eaque dolor, animi porro nihil doloribus ab, ratione in repellendus architecto! Dicta fugit inventore magni repellendus voluptatem consequatur qui rem, mollitia illum temporibus. Delectus, cupiditate corporis! Dicta eveniet non cupiditate reprehenderit at possimus eaque facere. Mollitia neque ipsum dolorum sunt omnis consequatur velit totam animi voluptatem, esse magnam aspernatur alias eos ea, perferendis quas odio veritatis doloremque cumque voluptatibus labore veniam! Consequuntur, officia rerum reiciendis vitae, eligendi ducimus totam facilis odio dolorum assumenda aliquid quos error sapiente minus voluptatum obcaecati aut ea sit impedit ab repudiandae nemo. Repellendus dolore facilis saepe vitae enim in voluptatem possimus laboriosam, nisi labore rerum inventore. Voluptatibus itaque molestias iusto labore praesentium illo assumenda porro fugiat? Assumenda alias consequatur quod quia ratione doloremque excepturi voluptatem blanditiis hic numquam repudiandae, neque iure ex velit maiores corporis error libero voluptatum pariatur sequi deleniti distinctio. Non, vero qui ullam necessitatibus id quae doloremque, nam dolore ea blanditiis tempore maiores recusandae cumque autem reiciendis tempora nisi distinctio. Dignissimos aliquam laboriosam iusto sapiente distinctio alias recusandae dicta esse exercitationem?
                    </p>
                </div>
            </div>
        </article>
    );
}


