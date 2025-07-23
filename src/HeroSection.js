import React, { useState, useEffect } from "react";

const images = [
  "/roboracter-student1.webp",
  "/roboracter-student2.webp",
  "/roboracter-student3.webp",
  "/roboracter-student4.webp",
  "/roboracter-student5.webp"
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="w-full relative overflow-hidden flex justify-center items-center pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20" 
      style={{ 
        minHeight: '300px',
        backgroundImage: 'url(/roboracter-slider-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Centered slider image with only shadow for depth, responsive size */}
      <div className="flex justify-center items-center w-full z-10 px-4 sm:px-6 lg:px-8">
        <img
          src={images[current]}
          alt="Roboracter slider"
          className="mx-auto rounded-xl shadow-2xl bg-white w-full max-w-[95vw] sm:max-w-[700px] md:max-w-[1000px] lg:max-w-[1320px] h-[220px] sm:h-[320px] md:h-[420px] lg:h-[620px] object-cover transition-all duration-700"
        />
      </div>
    </section>
  );
};

export default HeroSection;
