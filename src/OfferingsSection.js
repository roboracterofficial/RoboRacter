import React from "react";

const offerings = [
  {
    title: "Workshop in School / Colleges",
    image: "/roboracter-Workshop.jpg",
    description: "Our customized robotics project services are desOur robotics workshops in schools and colleges provide hands-on learning experiences that inspire creativity, critical thinking, and technical skills among students. These workshops cover the fundamentals of electronics, programming, and mechanical design using Arduino and other platforms, enabling participants to build real-world robotic systems. From basic line-followers to advanced obstacle-avoiding robots, each session is structured to suit the learners' age and expertise. We focus on practical application, teamwork, and innovation—making robotics both educational and fun.igned to help students, hobbyists, and institutions turn their unique ideas into fully functional prototypes. Whether it's for school competitions, college assignments, or personal innovation, we offer end-to-end support—including project planning, circuit design, coding, sensor integration, and final testing. Each project is tailored to meet specific goals, budgets, and technical levels."
  },
  {
    title: "PCB Design & Fabrication",
    image: "/roboracter-pcb-design.webp",
    description: "We offer complete PCB design and fabrication services to help bring your electronic and robotic projects from concept to reality. Our team specializes in creating custom schematic designs and professionally laid-out PCBs tailored to your requirements. Whether it’s a single-layer board for a student project or a complex multi-layer circuit for advanced robotics, we ensure precision, functionality, and manufacturability. Once the design is finalized, we handle the fabrication process to deliver high-quality, production-ready boards—saving time and ensuring reliable performance. Our PCB and schematic design services are tailored for students, makers, and institutions looking to bring their ideas to life with professional precision. From concept to final layout, we assist in designing custom schematics and compact, reliable PCBs for robotics and automation projects. Whether it’s a simple Arduino-based system or a complex multi-layer board, we ensure accuracy, functionality, and manufacturability at every stage."
  },
  {
    title: "Drone Devlopment",
    image: "/roboracterDrone-Devlopment.png",
    description: "To thrive in tomOur drone workshops in robotics offer students and enthusiasts a practical introduction to the world of aerial technology and automation. Participants learn the core principles of drone mechanics, flight control, and wireless communication while assembling and programming their own drones. Using components like flight controllers, sensors, and brushless motors, they gain hands-on experience in both hardware and software integration. Each workshop is tailored to skill level and curriculum needs, blending education with excitement to spark innovation in modern robotics.orrow’s world, children must be introduced to STEM Education. This will help foster curiosity, creativity and imagination in young minds; and inculcate skills such as design mind set, computational thinking, adaptive learning, physical computing, etc. Learn new age technologies like Robotics, 3D Printing, Open Source Programming, and Drones from experts at your convenience."
  }
];

const expertise = [
  {
    label: "Stem Equipment",
    icon: "/roboracter-stem.png"
  },
  {
    label: "3d Printing",
    icon: "https://img.icons8.com/office/80/000000/3d-printer.png"
  },
  {
    label: "DIY Kits",
    icon: "https://img.icons8.com/color/96/000000/maintenance.png"
  },
  {
    label: "Robotics",
    icon: "https://img.icons8.com/color/96/000000/robot-2.png"
  },
  {
    label: "Planned Syllabus",
    icon: "https://img.icons8.com/color/96/000000/open-book.png"
  },
  {
    label: "Complete Mentoring",
    icon: "https://img.icons8.com/color/96/000000/classroom.png"
  }
];

const OfferingsSection = ({ onEnrollClick }) => (
  <section className="py-12 bg-gray-50" id="offerings">
    <div className="px-2 sm:px-4 lg:px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex justify-center items-center gap-2">
          <span className="text-blue-500 font-normal">Our</span>
          <span className="text-red-700 font-extrabold">services</span>
        </h2>
        <div className="flex justify-center items-center mt-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-1"></span>
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-1"></span>
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-2"></span>
          <span className="inline-block align-middle" style={{width: '90px', height: '4px', background: '#ef4444', borderRadius: '2px'}}></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {offerings.map((offering, idx) => (
          <div key={idx} className="bg-gray-900 rounded-3xl shadow-lg p-10 flex flex-col justify-between items-center transition hover:shadow-2xl" style={{minHeight: 720, borderRadius: '48px 0 24px 24px'}}>
            <img src={offering.image} alt={offering.title} className="w-full" style={{height: 400, maxHeight: 400, objectFit: 'cover', borderTopLeftRadius: 48, borderTopRightRadius: 0}} />
            <div className="flex flex-col items-center px-8 py-6 w-full">
              <h3 className="text-2xl font-extrabold text-white text-center mb-2">{offering.title}</h3>
              <div className="w-12 h-1 bg-yellow-400 rounded mb-4"></div>
              <p className="text-white text-center mb-6">{offering.description}</p>
              <button className="mt-auto bg-blue-700 text-white px-8 py-2 rounded-full font-bold text-lg shadow hover:bg-blue-800 transition" onClick={typeof onEnrollClick === 'function' ? onEnrollClick : undefined}>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
      {/* Our Expertise Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex justify-center items-center gap-2">
          <span className="text-blue-500 font-normal">Our</span>
          <span className="text-red-700 font-extrabold">Expertise</span>
        </h2>
        <div className="flex justify-center items-center mt-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-1"></span>
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-1"></span>
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-2"></span>
          <span className="inline-block align-middle" style={{width: '90px', height: '4px', background: '#ef4444', borderRadius: '2px'}}></span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-12 mb-8">
        {expertise.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center w-32">
            <img src={item.icon} alt={item.label} className="w-20 h-20 mb-2" />
            <div className="text-center font-bold text-base mt-2" style={{fontFamily: 'Roboto Slab, serif'}}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OfferingsSection; 