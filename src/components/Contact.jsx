// import React, { useState } from "react";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Textarea } from "../components/ui/textarea";
// import { Mail, Home, Phone } from "lucide-react";
// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     website: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Here you would typically send the data to your backend
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="md:flex">
//           <div className="md:w-1/2 p-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Contact Us
//             </h2>
//             <p className="text-gray-600 mb-6">
//               We are committed to processing the information in order to contact
//               you and talk about your project.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3 text-gray-700">
//                 <Mail className="h-5 w-5 text-orange-500" />
//                 <span>example@teamwebflow.com</span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-700">
//                 <Home className="h-5 w-5 text-orange-500" />
//                 <span>
//                   4074 Ebert Summit Suite 375
//                   <br />
//                   Lake Leonardchester
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-700">
//                 <Phone className="h-5 w-5 text-orange-500" />
//                 <span>+44 123 654 7890</span>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 p-8 bg-gray-50">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <Input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full"
//                 />
//               </div>
//               <div>
//                 <Input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full"
//                 />
//               </div>
//               <div>
//                 <Input
//                   type="url"
//                   name="website"
//                   placeholder="Website"
//                   value={formData.website}
//                   onChange={handleChange}
//                   className="w-full"
//                 />
//               </div>
//               <div>
//                 <Textarea
//                   name="message"
//                   placeholder="Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full h-32"
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:opacity-90 transition duration-300"
//               >
//                 Submit
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-purple-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full  shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold  mb-4">Get in touch</h2>
            <p className="text-white">
              I am committed to processing the information in order to contact
              you and talk about your project.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 pt-5 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>thobhi2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v7H7V5zm8 9v-1a1 1 0 00-1-1H6a1 1 0 00-1 1v1h10z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Lagos Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+44 123 654 7890</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div></div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold py-2 px-4 rounded-md hover:opacity-90 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
