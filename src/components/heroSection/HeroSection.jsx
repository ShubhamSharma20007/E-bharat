import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-[70vh]">
      <div className="w-full h-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1661458140307-c9ea805a5f84?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className=" object-cover h-full w-full"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
