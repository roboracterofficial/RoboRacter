import React from "react";

const courses = [
  {
    title: "Autobot Basic Level",
    image: "/roboracterAutobotBasicLevel.jpg",
    description: "Electronic components are the building blocks of all circuits. Key components include resistors (limit current), capacitors (store charge), diodes (control current direction), transistors (amplify or switch signals), and LEDs (light-emitting diodes for indicators). Learning how each part works and connects on a breadboard is the first step in understanding and designing basic robotic systems.",
    checklist: ["Age 7+", "Basic Level Course", "Take Away Robotics Kit"],
    cta: "Explore"
  },
  {
    title: "Autobot Intermediate",
    image: "/roboracterAutobotIntermediate.jpg",
    description: "At the intermediate level, Autobot projects involve building robots that respond to their environment using basic sensors like IR (infrared), ultrasonic, and light sensors. These sensors help the robot detect obstacles, follow lines, or avoid edges. Students learn to integrate sensor inputs with simple logic circuits bringing more interaction and intelligence to their robotic creations.",
    checklist: ["Age 11+", "Intermediate Level Course", "Take Away Add-on Sensor Kit"],
    cta: "Explore"
  },
  {
    title: "Autobot Advanced",
    image: "/roboracterAutobotAdvanced.jpg",
    description: "At the advanced level robots don't just react—they think. Using sensors to map surroundings, detect junctions, and choose optimal routes, they apply techniques like line mapping, dead-end detection, and decision trees. This level builds skills in both hardware and programming, showing how robots can solve real-world challenges independently.",
    checklist: ["Age 14+", "Advanced Level Course", "Take Away Add-on Sensor Kit"],
    cta: "Explore"
  },
  {
    title: "PCB Designing",
    image: "/roboracterPCBDesigning.jpg",
    description: "PCB (Printed Circuit Board) designing is the process of creating a physical board that connects and supports electronic components. It replaces messy breadboards with a clean, compact, and reliable layout. Students learn to place components, draw tracks, and generate files for manufacturing using software like KiCad or EasyEDA, helping bring their robotic circuits to a professional level.",
    checklist: ["Age 14+", "Complete PCB Designing", "Take Away Designed PCB"],
    cta: "Explore"
  },
  {
    title: "Wireless Robotics & Drones",
    image: "/roboracterWirelessRobotics&Drones.jpg",
    description: "Wireless robotics and drones take robotics to the next level by adding remote control and communication features. Using modules like Bluetooth, Wi-Fi, or RF, students build robots or drones that can be operated from a smartphone or computer. This introduces concepts of real-time data transmission, control systems, and mobility in open environments.",
    checklist: ["Age 18+", "Basic Drone Building", "Take Away Designed Drone"],
    cta: "Explore"
  },
  {
    title: "Custom Projects For School & College",
    image: "/roboracterCustomProjects.jpg",
    description: "We support school and college students in bringing their unique ideas to life through custom robotics and electronics projects. Whether it's a smart system, automation tool, or creative robot, we guide them from concept to completion—offering help with design, components, coding, and final assembly tailored to their requirements.",
    checklist: ["Age 7+", "Mentoring", "Project Guidance"],
    cta: "Explore"
  }
];

const baseMinHeight = 676;
const cardMinHeight = baseMinHeight * 1.1; // +10%
const cardMaxWidth = 550;
const headingStyle = { fontFamily: "'Roboto Slab', serif" };

const CoursesSection = () => (
  <section id="courses" className="py-12 bg-gray-50">
    <div className="px-2 sm:px-4 lg:px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold flex justify-center items-center gap-2">
          <span className="text-blue-500 font-normal">Our Best</span>
          <span className="text-red-700 font-extrabold">Courses</span>
        </h2>
        <div className="flex justify-center items-center mt-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-1"></span>
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-1"></span>
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-2"></span>
          <span className="inline-block align-middle" style={{width: '90px', height: '4px', background: '#ef4444', borderRadius: '2px'}}></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="w-full bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-between items-center transition hover:shadow-2xl" style={{minHeight: cardMinHeight, maxWidth: cardMaxWidth, margin: '0 auto'}}>
            <div className="w-full max-w-[445px] h-[200px] sm:h-[230px] md:h-[256px] mb-6 bg-white flex items-center justify-center rounded-xl overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className={`w-full h-full object-cover${idx === 1 ? ' scale-125' : ''}`}
              />
            </div>
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
              ))}
            </div>
            {idx === 5 ? (
              <div className="text-center mb-3">
                <div className="text-3xl font-bold text-gray-800" style={headingStyle}>Custom Projects</div>
                <div className="text-sm text-gray-600 mt-1" style={headingStyle}>(For School &amp; College)</div>
              </div>
            ) : (
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-3" style={headingStyle}>{course.title}</h3>
            )}
            <p className="text-blue-700 text-center mb-6 text-lg">{course.description}</p>
            <ul className="mb-6 space-y-2 w-full">
              {course.checklist.map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 text-lg">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 0 0-1.414z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-auto bg-blue-700 text-white px-10 py-3 rounded-full font-bold text-xl shadow hover:bg-blue-800 transition">Explore</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection; 