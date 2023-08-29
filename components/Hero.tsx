"use client";

import Image from "next/image";
import React, { useState } from 'react';


import { CustomButton } from "@/components";

const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // handleLoginClick fonksiyonunu ekleyin
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  return (

    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
         Otobüs bileti bul
        </h1>
        <p className="hero__subtitle">
          Lojiper ile en uyguna güvenilir bilet 
        </p>

        <CustomButton
          title="Bilet Al"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
       

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;



