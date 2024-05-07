import person from '../assets/images/about_us/person.jpg';
import parts from '../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row my-14">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white" />
                </div>
                <div className='w-1/2'>
                    <h4 className='text-[#FF3811] text-xl mb-5 font-bold'>About Us</h4>
                    <h1 className="text-5xl font-bold w-[65%]">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-secondary mt-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;