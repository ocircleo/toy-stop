/* eslint-disable react/no-unescaped-entities */
import quality from '../../../../assets/quality.png'
import Trust from '../../../../assets/trusted.png'
import services from '../../../../assets/servie.png'
import price from '../../../../assets/price.png'


const WhyBuyFromUsHome = () => {

    return (
        <div >
            <h1 data-aos='zoom-in' className="text-center text-3xl font-bold capitalize py-6">Why Buy from us</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 container lg:grid-cols-2 xl:grid-cols-4 gap-10 items-center ">
                <div data-aos='zoom-in' className="w-full border border-red-500 rounded p-4 hover:bg-red-500 duration-500 h-full">
                    <h1 className="text-xl font-bold flex flex-col items-center  text-center capitalize">
                        <img src={quality} alt="" className='h-[70px] w-[70px]' />
                        Quality</h1>

                    <p className="text-center">
                        "Endless joy in every toy, our store reigns supreme. Quality crafted wonders, fulfilling dreams. Imagination soars, laughter unfurls. A toy paradise, where magic swirls."</p>
                </div>
                <div data-aos='zoom-in' className="w-full border border-red-500 rounded p-4 hover:bg-red-500 duration-200 h-full">
                    <h1 className="text-xl font-bold flex flex-col items-center  text-center capitalize">
                        <img src={price} alt="" className='h-[70px] w-[70px]' />
                        price</h1>
                    <p className="text-center">"Affordable treasures abound, our store stands tall. Quality meets value, captivating all. Smiles ignite, wallets rejoice. Price perfection, where every choice finds its voice."</p>
                </div>
                <div data-aos='zoom-in' className="w-full border border-red-500 rounded p-4 hover:bg-red-500 duration-200 h-full">
                    <h1 className="text-xl font-bold flex flex-col items-center  text-center capitalize">
                        <img src={services} alt="" className='h-[70px] w-[70px]' />
                        services</h1>
                    <p className="text-center">
                        "Unparalleled service, our store takes the lead. With care and expertise, we meet every need. Friendly guidance, a customer's delight. From start to end, service shining bright."</p>
                </div>
                <div data-aos='zoom-in' className="w-full border border-red-500 rounded p-4 hover:bg-red-500 duration-200 h-full">
                    <h1 className="text-xl font-bold flex flex-col items-center  text-center capitalize">
                        <img src={Trust} alt="" className='h-[70px] w-[70px]' />
                        trusted by all</h1>
                    <p className="text-center">"Trust built strong, our store's foundation secure. Honesty and integrity, we assure. Handpicked toys, safe and sound. A trusted haven, where happiness is found."</p>
                </div>
            </div>
        </div>
    );
};

export default WhyBuyFromUsHome;