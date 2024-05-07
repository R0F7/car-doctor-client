import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.01)]">
                    <div className='ml-12'>
                        <h2 className='w-[40%] text-6xl font-bold text-white mb-7'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white w-[50%] mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                    <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle bg-transparent text-gray-200">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.01)]">
                    <div className='ml-12'>
                        <h2 className='w-[40%] text-6xl font-bold text-white mb-7'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white w-[50%] mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.01)]">
                    <div className='ml-12'>
                        <h2 className='w-[40%] text-6xl font-bold text-white mb-7'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white w-[50%] mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.01)]">
                    <div className='ml-12'>
                        <h2 className='w-[40%] text-6xl font-bold text-white mb-7'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white w-[50%] mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
            <img src={img5} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.01)]">
                    <div className='ml-12'>
                        <h2 className='w-[40%] text-6xl font-bold text-white mb-7'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white w-[50%] mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
            <img src={img6} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.01)]">
                    <div className='ml-12'>
                        <h2 className='w-[40%] text-6xl font-bold text-white mb-7'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg text-white w-[50%] mb-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;