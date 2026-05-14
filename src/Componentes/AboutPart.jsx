import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import Container from "./Container";

const Testimonial = () => {
  return (
    <>
        <section className="bg-[#0B1023] py-24 text-white overflow-hidden">
            <Container>
                <div className=" mx-auto px-4">
        
        
        <div className="text-center mb-16">
          <p className="text-sm text-gray-300 mb-3">
            • Testimonials
          </p>

          <h2 className="text-5xl font-bold leading-tight max-w-[700px] mx-auto">
            What our customers say about their experience
          </h2>
        </div>

        {/* Cards */}
        <div className="flex gap-6 items-stretch">
          
          {/* Left Purple Card */}
          <div className="w-[280px] bg-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between hover:bg-primary">
            
            <div className="">
              {/* Images */}
              <div className="flex -space-x-3 mb-5">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=4"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <p className="text-sm text-gray-200 leading-6 mb-10">
                Over 15,000+ Attendees <br />
                Connected Worldwide
              </p>

              <h3 className="text-2xl font-semibold leading-10">
                Client Experience Speak For Themselves
              </h3>
              <button className="mt-10 bg-white text-[#5B2EFF] font-semibold py-3 rounded-full w-fit px-6 hover:scale-105 duration-300">
              View All Reviews
            </button>
            </div>

            
          </div>

          {/* Testimonial Card */}
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-primary">
            
            {/* Stars */}
            <div className="flex gap-1 text-[#7C4DFF] mb-6 hover:bg-white">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Text */}
            <p className="text-gray-200 leading-8 text-lg border-b border-white/10 pb-10">
              "Truly outstanding service! The team exceeded our
              expectations with their professionalism, creativity,
              and quick turnaround time. Highly recommended for
              anyone seeking quality and reliability."
            </p>

            {/* User */}
            <div className="flex items-center justify-between pt-8">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/60?img=5"
                  alt=""
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <h4 className="font-semibold text-lg">
                    Ralph Edwards
                  </h4>

                  <p className="text-sm text-gray-400">
                    Global Marketing Director
                  </p>
                </div>
              </div>

              <FaQuoteRight className="text-[#7C4DFF] text-2xl" />
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            
            {/* Stars */}
            <div className="flex gap-1 text-[#7C4DFF] mb-6">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Text */}
            <p className="text-gray-200 leading-8 text-lg border-b border-white/10 pb-10">
              "Truly outstanding service! The team exceeded our
              expectations with their professionalism, creativity,
              and quick turnaround time. Highly recommended for
              anyone seeking quality and reliability."
            </p>

            {/* User */}
            <div className="flex items-center justify-between pt-8">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/60?img=8"
                  alt=""
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <h4 className="font-semibold text-lg">
                    Kristin Watson
                  </h4>

                  <p className="text-sm text-gray-400">
                    Global Marketing Director
                  </p>
                </div>
              </div>

              <FaQuoteRight className="text-[#7C4DFF] text-2xl" />
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-2 rounded-full bg-[#7C4DFF]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </div>

        {/* Brand Section */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] bg-white/10 flex-1"></div>

            <p className="text-gray-300 text-sm">
              Supported by Brands That Inspire Innovation
            </p>

            <div className="h-[1px] bg-white/10 flex-1"></div>
          </div>

          {/* Logos */}
          <div className="flex justify-between items-center flex-wrap gap-8">
            
            <div className="flex items-center gap-2 text-gray-300">
              <IoFlash className="text-black w-10 h-10 bg-primary rounded-full" />
              <span className="font-semibold">Logoipsum</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <IoFlash className="text-[#7C4DFF]" />
              <span className="font-semibold">Logoipsum</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <IoFlash className="text-[#7C4DFF]" />
              <span className="font-semibold">Logoipsum</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <IoFlash className="text-[#7C4DFF]" />
              <span className="font-semibold">Logoipsum</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <IoFlash className="text-[#7C4DFF]" />
              <span className="font-semibold">Logoipsum</span>
            </div>

          </div>
        </div>
      </div>
            </Container>
      
    </section>
    </>
  );
};

export default Testimonial;



