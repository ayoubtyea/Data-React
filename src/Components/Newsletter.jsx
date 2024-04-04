import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & Tricks to optimize your flow?
          </h1>
          <p>Sign Up To Your Newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex felx-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#48cae4] text-white w-[200px] rounded-md font-medium ml-4 my-6 mx-auto md:mx-0 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We Care About The Protection Of Your Data. Read Our{" "}
            <span className="text-[#48cae4]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
