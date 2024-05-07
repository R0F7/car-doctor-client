import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    // console.log(service);

    return (
        <div className="border p-6 rounded-lg">
            <figure className="h-[200px] w-full">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-full" />
            </figure>
            <div className="mt-5">
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center justify-between">
                    <p className="text-[#FF3811] mt-2 mb-3 font-semibold">Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;