import React from "react";

const courses = [
  {
    title: "Autobot Basic Level",
    image: "/roboracterAutobotBasicLevel.jpg",
    description: "Electronic components are the building blocks of all circuits. Key components include resistors (limit current), capacitors (store charge), diodes (control current direction), transistors (amplify or switch signals), and LEDs (light-emitting diodes for indicators). Learning how each part works and connects on a breadboard is the first step in understanding and designing basic robots.",
    checklist: ["Age 7+", "Basic Level Course", "Take Away Robotics Kit"],
    cta: "Explore"
  },
  {
    title: "Autobot Intermediate",
    image: "/roboracterAutobotIntermediate.jpg",
    description: "At the intermediate level, Autobot projects involve building robots that respond to their environment using basic sensors like IR (infrared), ultrasonic, and light sensors. These sensors help the robot detect obstacles, follow lines, or avoid edges. Students learn to effectively integrate sensor inputs with simple digital logic circuits, bringing more interaction and intelligence to their robots.",
    checklist: ["Age 11+", "Intermediate Level Course", "Take Away Add-on Sensor Kit"],
    cta: "Explore"
  },
  {
    title: "Autobot Advanced",
    image: "/roboracterAutobotAdvanced.jpg",
    description: "At the advanced level, robots don't just react — they think and act intelligently. Using various sensors to map their surroundings, detect junctions, and choose the fastest and most optimal routes. This level builds essential skills in both hardware integration and programming logic, clearly showing how robots can effectively solve complex, real-world challenges with efficiency and precision.",
    checklist: ["Age 14+", "Advanced Level Course", "Take Away Add-on Sensor Kit"],
    cta: "Explore"
  },
  {
    title: "PCB Designing",
    image: "/roboracterPCBDesigning.jpg",
    description: "PCB (Printed Circuit Board) designing is the process of creating a board that connects and supports components. It replaces messy breadboards with a clean, compact, reliable layout. Students learn to place components, draw tracks, and generate files for manufacturing using software like EasyEDA, helping bring their robotic circuits to a professional level.",
    checklist: ["Age 14+", "Complete PCB Designing", "Take Away Designed PCB"],
    cta: "Explore"
  },
  {
    title: "Wireless Robotics & Drones",
    image: "/roboracterWirelessRobotics&Drones.jpg",
    description: "Wireless robotics and drones take robotics to the next level by adding remote control and communication features. Using modules like Bluetooth, Wi-Fi, or RF, students build robots or drones that can be operated from a smartphone or computer. This introduces concepts of real time data transmission, control systems, and mobility in open environments.",
    checklist: ["Age 18+", "Basic Drone Building", "Take Away Designed Drone"],
    cta: "Explore"
  },
  {
    title: "Custom Projects For School & College",
    image: "/roboracterCustomProjects.jpg",
    description: "We support school and college students in bringing their ideas to life through custom robotics and electronics projects. Whether it's a smart system, automation tool, or creative robot, we guide them from concept to completion with design, components, coding, and final assembly tailored to their needs.",
    checklist: ["Age 7+", "Mentoring", "Project Guidance"],
    cta: "Explore"
  }
];

const baseMinHeight = 676;
const cardMinHeight = baseMinHeight * 1.25; // +25%
const cardMaxWidth = 540;
const headingStyle = { fontFamily: "'Roboto Slab', serif" };

const CoursesSection = ({ onEnrollClick }) => (
  <section id="courses" className="py-12 bg-gray-50">
    <div className="px-2 sm:px-4 lg:px-6">
      {/* Demo Class Button */}
      <div className="text-center mb-12">
        <button 
          onClick={onEnrollClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          🚀 Schedule Demo Class
        </button>
      </div>
      
      <div className="text-center mb-8">
                         <h2 className="text-3xl font-bold flex justify-center items-center gap-2" style={{fontFamily: "'Montserrat', sans-serif"}}>
           <span className="font-normal" style={{color: '#0C54A4'}}>Our Best</span>
           <span className="font-extrabold" style={{color: '#b91c1c'}}>Courses</span>
         </h2>
                 <div className="flex justify-center items-center mt-2">
           <span className="w-2 h-2 inline-block mr-1" style={{backgroundColor: '#b91c1c', borderRadius: '3px'}}></span>
           <span className="w-2 h-2 inline-block mr-1" style={{backgroundColor: '#b91c1c', borderRadius: '3px'}}></span>
           <span className="w-2 h-2 inline-block mr-2" style={{backgroundColor: '#b91c1c', borderRadius: '3px'}}></span>
           <span className="inline-block align-middle" style={{width: '117px', height: '7px', background: '#b91c1c', borderRadius: '3.5px'}}></span>
         </div>
      </div>
      
      <div className="max-w-[1584px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-lg flex flex-col justify-between items-center transition hover:shadow-2xl h-full w-full" style={{maxWidth: cardMaxWidth, margin: '0 auto', paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px', paddingBottom: '30px'}}>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {idx === 5 ? (
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-gray-800" style={headingStyle}>Custom Projects</div>
                  <div className="text-sm text-gray-600 mt-1" style={headingStyle}>(For School &amp; College)</div>
                </div>
              ) : (
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-3" style={headingStyle}>{course.title}</h3>
              )}
              <p className="text-blue-700 text-center mb-6 text-lg courses-body-small" style={{color: '#0C54A4'}}>{course.description}</p>
              <ul className="mb-6 space-y-2 w-full courses-body-small">
                {course.checklist.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{marginRight: '8px'}} xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="5" fill="#0C54A4"/>
                      <path d="M7 12.5L11 16.5L17 9.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-blue-700 text-white px-10 py-3 rounded-full font-bold text-xl shadow hover:bg-blue-800 transition" onClick={typeof onEnrollClick === 'function' ? onEnrollClick : undefined}>Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CoursesSection; 