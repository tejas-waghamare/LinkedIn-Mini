// import React from "react";
// import Logo from "../assets/MinLogo4.png";

// const AboutTeam = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-6 py-10">
//       <div className="bg-white rounded-2xl shadow-lg p-8">

//         <div className="flex flex-col items-center text-center">
//           <img
//             src={Logo}
//             alt="LinkedIn Mini Team"
//             className="w-24 h-24 rounded-full shadow-lg mb-4"
//           />

//           <h1 className="text-2xl font-bold text-gray-800">
//             LinkedIn Mini Team
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Official About Page
//           </p>
//         </div>

//         <hr className="my-6"/>

//         <div className="space-y-4 text-gray-700 leading-relaxed">
//           <h2 className="text-lg font-semibold">About Us</h2>

//           <p>
//             LinkedIn Mini is a lightweight professional networking platform
//             designed to help students, developers, and professionals showcase
//             their skills, connect with peers, and grow their online presence.
//           </p>

//           <p>
//             This platform is built with MERN stack and focuses on simplicity,
//             speed, and real-world LinkedIn style features.
//           </p>

//           <ul className="list-disc ml-6">
//             <li>Create & manage posts</li>
//             <li>Professional profiles</li>
//             <li>Admin dashboard</li>
//             <li>Secure authentication</li>
//           </ul>

//           <p className="font-semibold text-blue-600">
//             Built with ❤️ by LinkedIn Mini Team
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutTeam;


// import React from "react";
// import { 
//   FaLinkedin, 
//   FaGithub, 
//   FaGlobe, 
//   FaCode, 
//   FaDatabase, 
//   FaShieldAlt, 
//   FaRocket,
//   FaHeart,
//   FaCrown
// } from "react-icons/fa";
// import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
// import Logo from "../assets/MinLogo4.png";
// import MyPhoto from "../assets/Myphoto.jpg"; // Add your photo here

// const AboutTeam = () => {
//   const founder = {
//     name: "Mr. Tejas D. Waghamare", // Replace with your name
//     role: "Founder & Full Stack Developer",
//     bio: "Passionate about building innovative web applications and creating meaningful digital experiences. With expertise in the MERN stack, I built LinkedIn Mini to provide a modern, streamlined platform for professional networking.",
//     linkedin: "www.linkedin.com/in/tejas-waghamare-62b6b0290", // Replace with your LinkedIn
//     github: "https://github.com/tejas-waghamare", // Replace with your GitHub
//     photo: MyPhoto // Replace with your photo path
//   };

//   const features = [
//     {
//       icon: <FaCode className="text-2xl" />,
//       title: "Modern Tech Stack",
//       description: "Built with latest MERN technologies for optimal performance"
//     },
//     {
//       icon: <FaShieldAlt className="text-2xl" />,
//       title: "Secure Authentication",
//       description: "JWT-based secure login system with protected routes"
//     },
//     {
//       icon: <FaDatabase className="text-2xl" />,
//       title: "Real-time Updates",
//       description: "Instant post updates and seamless user interactions"
//     },
//     {
//       icon: <FaRocket className="text-2xl" />,
//       title: "Lightning Fast",
//       description: "Optimized for speed and smooth user experience"
//     }
//   ];

//   const techStack = [
//     { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500" /> },
//     { name: "Express.js", icon: <SiExpress className="text-3xl text-gray-800" /> },
//     { name: "React", icon: <SiReact className="text-3xl text-blue-500" /> },
//     { name: "Node.js", icon: <SiNodedotjs className="text-3xl text-green-600" /> },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-4">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className=" text-center mb-2">
//           <div className="flex justify-center mb-2">
//             <div className=" relative">
//               <img
//                 src={Logo}
//                 alt="LinkedIn Mini"
//                 className="w-35 h-32 p-1 rounded-2xl shadow-2xl border-4 border-sky-200 transform hover:scale-105 transition duration-300"
//               />
//               <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
//                 <FaRocket className="text-sm" />
//               </div>
//             </div>
//           </div>
          
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">
//             LinkedIn <span className="text-blue-600">Mini</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             A modern, lightweight professional networking platform built for the next generation of professionals
//           </p>
//         </div>

//         {/* Main Content Card */}
//         <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
//           <div className="p-8 md:p-4">
            
//             {/* Founder Section - At the Top */}
//             <div className="mb-5">
//               <div className="text-center mb-4">
//                 <div className="flex items-center justify-center gap-2 mb-4">
//                   <FaCrown className="text-yellow-500 text-xl" />
//                   <h2 className="text-3xl font-bold text-gray-900">Founder</h2>
//                   <FaCrown className="text-yellow-500 text-xl" />
//                 </div>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   Meet the developer behind LinkedIn Mini
//                 </p>
//               </div>

//               <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
//                 <div className="flex flex-col lg:flex-row items-center gap-8">
//                   {/* Founder Photo */}
//                   <div className="flex-shrink-0">
//                     <div className="relative">
//                       <img
//                         src={founder.photo}
//                         alt={founder.name}
//                         className="w-48 h-48 rounded-2xl object-cover shadow-2xl border-4 border-white"
//                       />
//                       <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg">
//                         <FaCode className="text-lg" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Founder Info */}
//                   <div className="flex-1 text-center lg:text-left">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
//                     <p className="text-blue-600 font-semibold mb-4 flex items-center justify-center lg:justify-start gap-2">
//                       <FaRocket className="text-blue-500" />
//                       {founder.role}
//                     </p>
//                     <p className="text-gray-700 leading-relaxed mb-6">
//                       {founder.bio}
//                     </p>
                    
//                     {/* Social Links */}
//                     <div className="flex justify-center lg:justify-start gap-4">
//                       <a 
//                         href={founder.linkedin} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
//                       >
//                         <FaLinkedin />
//                         <span>LinkedIn</span>
//                       </a>
//                       <a 
//                         href={founder.github} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition duration-300"
//                       >
//                         <FaGithub />
//                         <span>GitHub</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mission Section */}
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
//               <div className="grid md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                     LinkedIn Mini redefines professional networking by offering a streamlined, 
//                     user-friendly platform where students, developers, and professionals can 
//                     authentically showcase their skills, build meaningful connections, and 
//                     accelerate their career growth.
//                   </p>
//                   <div className="flex items-center text-blue-600 font-semibold">
//                     <FaHeart className="mr-2 text-red-500" />
//                     Built with passion for the developer community
//                   </div>
//                 </div>
//                 <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
//                   <h3 className="text-xl font-bold mb-4">Why Choose LinkedIn Mini?</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
//                       Zero clutter, pure networking
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
//                       Fast and responsive design
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
//                       Open-source friendly
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
//                       Student & developer focused
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Features Grid */}
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {features.map((feature, index) => (
//                   <div 
//                     key={index}
//                     className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition duration-300 border border-gray-100"
//                   >
//                     <div className="text-blue-600 mb-4 flex justify-center">
//                       {feature.icon}
//                     </div>
//                     <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                     <p className="text-gray-600 text-sm">{feature.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tech Stack */}
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Tech Stack</h2>
//               <div className="flex justify-center space-x-8 mb-8">
//                 {techStack.map((tech, index) => (
//                   <div key={index} className="text-center">
//                     {tech.icon}
//                     <p className="text-sm font-medium text-gray-700 mt-2">{tech.name}</p>
//                   </div>
//                 ))}
//               </div>
//               <p className="text-center text-gray-600 max-w-2xl mx-auto">
//                 Powered by the MERN stack with modern tools and best practices for 
//                 scalable, maintainable, and high-performance web applications.
//               </p>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 text-center">
//             <div className="max-w-2xl mx-auto">
//               <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
//               <p className="mb-6 text-blue-100">
//                 Join LinkedIn Mini today and take your professional networking to the next level
//               </p>
//               <div className="flex justify-center space-x-6 text-sm">
//                 <span className="flex items-center">
//                   <FaGlobe className="mr-2" />
//                   Open Source
//                 </span>
//                 <span className="flex items-center">
//                   <FaCode className="mr-2" />
//                   Community Driven
//                 </span>
//                 <span className="flex items-center">
//                   <FaHeart className="mr-2 text-red-300" />
//                   Always Free
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutTeam;

import React from "react";
import { 
  FaLinkedin, 
  FaGithub, 
  FaGlobe, 
  FaCode, 
  FaDatabase, 
  FaShieldAlt, 
  FaRocket,
  FaHeart,
  FaCrown
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import Logo from "../assets/MinLogo4.png";
import MyPhoto from "../assets/Myphoto.jpg";

const AboutTeam = () => {
  const founder = {
    name: "Mr. Tejas D. Waghamare",
    role: "Founder & Full Stack Developer",
    bio: "Passionate about building innovative web applications and creating meaningful digital experiences. With expertise in the MERN stack, I built LinkedIn Mini to provide a modern, streamlined platform for professional networking.",
    linkedin: "https://www.linkedin.com/in/tejas-waghamare-62b6b0290",
    github: "https://github.com/tejas-waghamare",
    photo: MyPhoto
  };

  const features = [
    {
      icon: <FaCode className="text-xl sm:text-2xl" />,
      title: "Modern Tech Stack",
      description: "Built with latest MERN technologies for optimal performance"
    },
    {
      icon: <FaShieldAlt className="text-xl sm:text-2xl" />,
      title: "Secure Authentication",
      description: "JWT-based secure login system with protected routes"
    },
    {
      icon: <FaDatabase className="text-xl sm:text-2xl" />,
      title: "Real-time Updates",
      description: "Instant post updates and seamless user interactions"
    },
    {
      icon: <FaRocket className="text-xl sm:text-2xl" />,
      title: "Lightning Fast",
      description: "Optimized for speed and smooth user experience"
    }
  ];

  const techStack = [
    { name: "MongoDB", icon: <SiMongodb className="text-2xl sm:text-3xl text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-2xl sm:text-3xl text-gray-800" /> },
    { name: "React", icon: <SiReact className="text-2xl sm:text-3xl text-blue-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-2xl sm:text-3xl text-green-600" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-4">
          <div className="flex justify-center mb-2 sm:mb-2">
            <div className="relative">
              <img
                src={Logo}
                alt="LinkedIn Mini"
                className="w-24 h-24 sm:w-35 p-2 sm:h-32 rounded-2xl shadow-lg border-4 border-sky-200 transform hover:scale-105 transition duration-300"
              />
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-blue-500 text-white p-1 sm:p-2 rounded-full">
                <FaRocket className="text-xs sm:text-sm" />
              </div>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            LinkedIn <span className="text-blue-600">Mini</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            A modern, lightweight professional networking platform built for the next generation of professionals
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden mb-8">
          <div className="p-4 sm:p-6 lg:p-4">
            
            {/* Founder Section */}
            <div className="mb-8 sm:mb-12">
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2 mb-2 sm:mb-4">
                  <FaCrown className="text-yellow-500 text-lg sm:text-xl" />
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Founder</h2>
                  <FaCrown className="text-yellow-500 text-lg sm:text-xl" />
                </div>
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                  Meet the developer behind LinkedIn Mini
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-100">
                <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                  {/* Founder Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-xl sm:rounded-2xl object-cover shadow-lg border-4 border-white"
                      />
                      <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 sm:p-3 rounded-full shadow-lg">
                        <FaCode className="text-sm sm:text-lg" />
                      </div>
                    </div>
                  </div>

                  {/* Founder Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3 sm:mb-4 flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base">
                      <FaRocket className="text-blue-500" />
                      {founder.role}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {founder.bio}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                      <a 
                        href={founder.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                      >
                        <FaLinkedin className="text-sm sm:text-base" />
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href={founder.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition duration-300 text-sm sm:text-base"
                      >
                        <FaGithub className="text-sm sm:text-base" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Our Mission</h2>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                    LinkedIn Mini redefines professional networking by offering a streamlined, 
                    user-friendly platform where students, developers, and professionals can 
                    authentically showcase their skills, build meaningful connections, and 
                    accelerate their career growth.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm sm:text-base">
                    <FaHeart className="mr-2 text-red-500" />
                    Built with passion for the developer community
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Why Choose LinkedIn Mini?</h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3"></div>
                      Zero clutter, pure networking
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3"></div>
                      Fast and responsive design
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3"></div>
                      Open-source friendly
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3"></div>
                      Student & developer focused
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Key Features</h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-md transition duration-300 border border-gray-100"
                  >
                    <div className="text-blue-600 mb-3 sm:mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Our Tech Stack</h2>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="text-center">
                    {tech.icon}
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mt-1 sm:mt-2">{tech.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Powered by the MERN stack with modern tools and best practices for 
                scalable, maintainable, and high-performance web applications.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 sm:py-8 text-center">
            <div className="max-w-2xl mx-auto px-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
              <p className="mb-4 sm:mb-6 text-blue-100 text-sm sm:text-base">
                Join LinkedIn Mini today and take your professional networking to the next level
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
                <span className="flex items-center">
                  <FaGlobe className="mr-1 sm:mr-2" />
                  Open Source
                </span>
                <span className="flex items-center">
                  <FaCode className="mr-1 sm:mr-2" />
                  Community Driven
                </span>
                <span className="flex items-center">
                  <FaHeart className="mr-1 sm:mr-2 text-red-300" />
                  Always Free
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;