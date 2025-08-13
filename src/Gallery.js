import React from "react";

const galleryItems = [
  { type: "image", src: "/roboracter_gal1.webp" },
  { type: "image", src: "/roboracter_gal2.webp" },
  { type: "image", src: "/roboracter-student1.webp" },
  { type: "image", src: "/roboracter-student2.webp" },
  { type: "image", src: "/roboracter-student3.webp" },
  { type: "image", src: "/roboracter-student4.webp" },
  { type: "image", src: "/roboracter-student5.webp" },
  { type: "image", src: "/roboracter-student6.webp" },
  { type: "image", src: "/roboracter-student7.webp" },
  { type: "image", src: "/roboracter-student8.webp" },
  { type: "image", src: "/roboracter-student9.webp" },
  { type: "image", src: "/roboracter-student10.webp" },
  { type: "video", src: "/roboracter-studentv1.mp4" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-yellow-400 hover:shadow-xl transition-shadow duration-300" style={{
              backgroundImage: `url('/Gallery-bg-vimage.avif')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className={`w-full h-56 ${
                    item.src.includes('student6') || item.src.includes('student7') || item.src.includes('student8') || item.src.includes('student9') || item.src.includes('student10')
                      ? 'object-contain'
                      : 'object-cover'
                  }`}
                  style={{ 
                    imageRendering: 'crisp-edges',
                    objectPosition: item.src.includes('student6') || item.src.includes('student7') || item.src.includes('student8') || item.src.includes('student9') || item.src.includes('student10')
                      ? 'center 36%' 
                      : 'center'
                  }}
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-56 object-cover"
                  controls
                  muted
                  loop
                  style={{ imageRendering: 'crisp-edges' }}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;