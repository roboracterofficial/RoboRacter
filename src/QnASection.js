import React, { useState } from "react";

const qna = [
  {
    question: "What is our AIM ?",
    answer: `Roboracter is dedicated to nurturing creativity, critical thinking, and problem-solving abilities in children through the exciting world of robotics and technology. Established with a vision to inspire the next generation of innovators, our goal is to make Roboracter a leading name in STEM and robotics education across India.\n\nWe believe that every child has the potential to become a creator, not just a consumer of technology. That’s why our courses are designed to be beginner-friendly—no prior coding or technical experience is required. With a strong focus on hands-on learning, every student receives a take-home robotic kit as part of the program, allowing them to build, experiment, and learn beyond the classroom.\n\nAt Roboracter, we make learning robotics fun, practical, and impactful—empowering kids with skills for the future.`
  },
  {
    question: "Why Roboracter is the Right Choice for Your Child ?",
    answer: `At Roboracter, we provide much more than a robotics class—we provide a future-ready learning experience. Here's what makes us stand out:\n\n• Customized Learning Paths based on your child's pace and interest\n• Hands-on Learning with Take-Home Kits – continue learning at home\n• Visual & Text-Based Programming using platforms like Scratch, TinkerCAD, and Arduino IDE\n• Project-Based Learning to build real-world robotics prototypes\n• Experienced Mentors & Educators to support your child’s journey\n• Language Options to make learning easier for kids across India`
  },
  {
    question: "What kind of robots will my child build ?",
    answer: `Kids will build a wide variety of functional robots that move, sense, respond, and even make decisions based on input.\n\nAt Roboracter, we focus on project-based learning, so every course module ends with the creation of a real, working robot. As your child progresses through the levels, they’ll start with simple bots like light-followers and obstacle-avoiders, then move on to more advanced creations such as robotic arms, smart home automation systems, line-following vehicles, and even internet-connected (IoT) devices.\n\nThese projects aren’t just toys—they’re powerful educational tools that teach real-world engineering, electronics, and coding concepts. Your child will learn how to use sensors, motors, microcontrollers (like Arduino), and various programming techniques to build robots that can react to their environment, follow instructions, and complete assigned tasks.\n\nBy the end of their course journey, your child will have built a portfolio of projects that not only reflect their learning but also spark innovation, imagination, and confidence in tackling future technologies.`
  },
  {
    question: "What age group is Roboracter suitable for ?",
    answer: `Roboracter programs are thoughtfully designed for children aged 7 to 18 years, covering a wide range of learning needs and developmental stages.\n\nWe understand that every child learns differently at different ages, which is why we’ve created structured, progressive levels—starting from basic mechanical exploration and drag-and-drop coding, all the way to advanced electronics and Arduino-based programming.\n\nYounger children (ages 7–10) begin with visual programming and hands-on activities that spark curiosity while developing their understanding of robotics fundamentals in a fun, stress-free environment. As they grow older (ages 11–13), students explore more complex projects involving circuits, sensors, and logic building. For teens (ages 14–18), the focus shifts to real-world problem-solving using advanced platforms, with exposure to IoT, automation, and even preparation for tech competitions.\n\nWhether your child is a complete beginner or already tech-savvy, Roboracter offers a customized path that nurtures their abilities, builds confidence, and keeps them motivated throughout their learning journey.`
  },
  {
    question: "Does my child need any prior coding or technical knowledge ?",
    answer: `Not at all—Roboracter courses are specially designed to welcome absolute beginners with zero prior experience in coding, robotics, or electronics.\n\nWe understand that many children (and parents) may feel intimidated by the idea of programming or building robots, which is why our curriculum is built around a gradual learning curve. Every concept is introduced step-by-step in a simple, visual, and interactive way to make sure kids feel confident and supported right from the start.\n\nAt the foundation level, we use block-based visual programming tools like Scratch, which allow kids to drag and drop code blocks to control their robots without needing to understand complex syntax. This builds their logical thinking and introduces them to core concepts like sequencing, loops, and conditions—all in a fun and visual environment.\n\nAs students become more comfortable, we guide them toward text-based coding platforms like Arduino IDE, where they begin to write real code to interact with sensors, motors, and other hardware components. The transition is smooth and intuitive, with plenty of examples, tutorials, and mentor support at every stage.\n\nBy the end of the course, even children who started with no background in technology are confidently building and coding fully functional robots—proving that anyone can learn, innovate, and succeed with the right guidance.`
  },
  {
    question: "How does Roboracter support continuous learning?",
    answer: `At Roboracter, learning doesn’t stop when a course ends—it evolves. We offer a complete ecosystem that nurtures long-term growth through structured levels, mentorship, and real-world applications.\n\nOur program is built on a tiered learning model, designed to guide students from foundational concepts all the way to advanced robotics, electronics, and programming. Children begin with beginner-friendly modules focused on basic mechanics, visual programming, and simple circuit building. Once they complete a level, they are encouraged to move forward to the next, where new challenges, technologies, and concepts await.\n\nEach level builds logically on the last, introducing more complexity in a way that remains fun and engaging. This structured progression keeps students constantly learning, experimenting, and improving their skills.\n\nFor kids with a passion for innovation and a desire to go further, we offer the Roboracter Mentor Program—a specialized track where students receive personal guidance to take on advanced projects, enter robotics competitions, develop science fair prototypes, or even create their own tech portfolios. This mentorship ensures that enthusiastic learners are never left without a challenge and always have expert support on their journey.\n\nAdditionally, our learning doesn’t just happen during class time. Students get access to community challenges, online resources, project support, and alumni networks, helping them stay inspired and connected even after their course ends. With Roboracter, we’re not just teaching robotics—we’re building the future generation of thinkers, creators, and leaders.`
  },
  {
    question: "Will my child get a certificate after completing the course?",
    answer: `Yes—every Roboracter student receives a personalized certificate of completion that not only recognizes their effort but also showcases the valuable skills they’ve learned during the course.\n\nWe believe in celebrating achievements and creating milestones that children can be proud of. At the end of each course level, students are awarded a professionally designed certificate that highlights their participation, completion status, and the specific technologies or programming platforms they’ve mastered—such as Scratch, Arduino, sensor integration, or mechanical design.\n\nBut that’s just the beginning.\n\nFor students who go above and beyond, we offer opportunities to earn advanced credentials through our project-based assessments, innovation challenges, and robotics competitions. These credentials go beyond attendance—they reflect real problem-solving skills, creativity, and technical competence. They are portfolio-worthy, meaning students can include them in school presentations, STEM portfolios, scholarship applications, and even early exposure to career and entrepreneurship events.\n\nIn higher-level programs, such as our Mentor Program, students also get the chance to submit capstone projects for review and recognition. These final projects can be showcased on their personal student profile or Roboracter’s achievement wall—giving them a sense of pride and visibility among peers and parents alike.\n\nIn short, our certification isn't just a piece of paper—it’s a meaningful acknowledgment of your child’s hard work, growth, and future potential in the world of technology and robotics.`
  }
];

const QnASection = () => {
  const [open, setOpen] = useState([true, false, false, false, false, false, false]);

  const toggle = idx => {
    setOpen(open => open.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/Roboracter-q&a-2.jpg" alt="Q&A Background" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold flex justify-center items-center gap-2">
            <span className="text-blue-500 font-normal">Roboracter</span>
            <span className="text-red-700 font-extrabold">-FAQ</span>
          </h2>
          <div className="flex justify-center items-center mt-2">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-1"></span>
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-1"></span>
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block mr-2"></span>
            <span className="inline-block align-middle" style={{width: '90px', height: '4px', background: '#ef4444', borderRadius: '2px'}}></span>
          </div>
        </div>
        <div className="space-y-4">
          {qna.map((item, idx) => (
            <div key={idx} className="bg-white/50 border border-gray-200 rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => toggle(idx)}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <div className="text-black font-bold text-lg mb-4 uppercase tracking-wide" style={{fontFamily: 'Roboto Slab, serif'}}>{item.question}</div>
                  {open[idx] && (
                    <div className="text-black text-base leading-relaxed whitespace-pre-line">{item.answer}</div>
                  )}
                </div>
                <div className="flex-shrink-0 mt-2 sm:mt-0 ml-auto bg-green-100 rounded-full p-2">
                  <svg
                    className={`w-3.5 h-3.5 text-green-500 transition-transform duration-200 ${open[idx] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QnASection; 