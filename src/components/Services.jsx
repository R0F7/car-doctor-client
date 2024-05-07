import useServices from "../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const services = useServices();

    return (
        <div className="mb-24">
            <div className="text-center mb-[50px]">
                <h4 className='text-[#FF3811] text-xl font-bold mb-'>Service</h4>
                <h1 className="text-5xl font-bold mb-5">Our Service Area</h1>
                <p className=" text-[#737373] w-[55%] mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
            </div>
            {/* <p>services {services.length}</p> */}
            <div className="grid grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;