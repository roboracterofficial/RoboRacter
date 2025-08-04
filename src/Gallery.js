import React from "react";

const images = [
  "/roboracter_gal1.webp",
  "/roboracter_gal2.webp",
  "/roboracter-student1.webp",
  "/roboracter-student2.webp",
  "/roboracter-student3.webp",
  "/roboracter-student4.webp",
  "/roboracter-student5.webp",
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-yellow-400 hover:shadow-xl transition-shadow duration-300">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;