import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const {_id, title, price, img } = service;
    
    const { user } = useContext(AuthContext);

    const handleBookService = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const number = form.phone.value;
        const email = form.email.value;
        const description = form.description.value;
        const booking = { 
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id : _id,
            number,
            price,
            description 
        };
        // console.log(booking);

        fetch('https://car-doctor-server-sandy-ten.vercel.app/bookings', {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
            alert('service book successfully')
           }
        })
    }

    return (
        <div className="bg-[#F3F3F3] p-24 mb-10">
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-2 gap-6">
                    <input name="name" type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full" />
                    <input name="date" type="date" className="input input-bordered w-full" />
                    <input name="phone" type="number" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input name="email" type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" />
                </div>
                <div>
                    <textarea name="description" className="textarea textarea-bordered h-[200px] w-full my-6" placeholder="Your Message"></textarea>
                    <input type="submit" className="bg-[#FF3811] w-full py-3 text-white font-bold" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;