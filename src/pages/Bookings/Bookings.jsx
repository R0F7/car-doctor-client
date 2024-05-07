import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure()

    // const url = `https://car-doctor-server-sandy-ten.vercel.app/booking?email=${user?.email}`;
    const url = `/booking?email=${user?.email}`;

    useEffect(() => {
        // fetch(url, { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        //use without baseUrl
        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data)
        //     })

        //use baseUrl 
        axiosSecure.get(url)
            .then(res => {
                setBookings(res.data)
            })

    }, [url, axiosSecure])

    const handleDelete = (id) => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://car-doctor-server-sandy-ten.vercel.app/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`https://car-doctor-server-sandy-ten.vercel.app/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const update = bookings.find(booking => booking._id === id);
                    update.status = 'confirm'
                    const newBookings = [update, ...remaining];
                    setBookings(newBookings)
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;