// const Profile = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-slate-600">
//       <div className="border p-4 w-1/3  rounded-xl bg-white/25 text-white">
//         <div className="flex justify-between">
//           <h1 className="text-2xl uppercase font-semibold tracking-widest">
//             Hasibur Rahman Akash
//           </h1>
//           <img
//             src="https://i.ibb.co/8zzhGcR/Logo.png"
//             alt=""
//             className="w-1/4 opacity-20"
//           />
//         </div>
//         <div className="flex justify-between items-end mt-14">
//           <div>
//             <h1 className="uppercase text-lg tracking-widest opacity-45">
//               Web Developer
//             </h1>
//             <div className="flex gap-3 items-center">
//               <a
//                 href="mailto:hasiburrahmanakash79@gmail.com"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <img
//                   className="h-4"
//                   src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
//                   alt=""
//                 />
//               </a>
//               <a
//                 href="fb"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <img
//                   className="h-5"
//                   src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png"
//                   alt=""
//                 />
//               </a>
//               <a
//                 href="li"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <img
//                   className="h-4"
//                   src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-icon-white-PNG-large-size.png"
//                   alt=""
//                 />
//               </a>
//               <p>/ hasiburRahmanAkash</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <img
//               className="h-6"
//               src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png"
//               alt=""
//             />
//             <img
//               className="h-6"
//               src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



'use client'

import { useState } from 'react'

export default function Component() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-600">
      <div
        className="relative border p-4 w-full max-w-md rounded-xl bg-white/25 text-white overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Lighting effect for the border */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-0 left-0 w-[200%] h-1 bg-gradient-to-r from-transparent via-white to-transparent ${isHovered ? 'animate-border-light' : ''}`} />
          <div className={`absolute top-0 right-0 w-1 h-[200%] bg-gradient-to-b from-transparent via-white to-transparent ${isHovered ? 'animate-border-light' : ''}`} />
          <div className={`absolute bottom-0 right-0 w-[200%] h-1 bg-gradient-to-l from-transparent via-white to-transparent ${isHovered ? 'animate-border-light' : ''}`} />
          <div className={`absolute bottom-0 left-0 w-1 h-[200%] bg-gradient-to-t from-transparent via-white to-transparent ${isHovered ? 'animate-border-light' : ''}`} />
        </div>

        {/* Card content */}
        <div className="relative z-10">
          <div className="flex justify-between">
            <h1 className="text-2xl uppercase font-semibold tracking-widest">
              Hasibur Rahman Akash
            </h1>
            <div className="relative w-1/4">
              <img
                src="https://i.ibb.co/8zzhGcR/Logo.png"
                alt=""
                className="w-full opacity-20"
              />
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${isHovered ? 'animate-logo-light' : ''}`} />
            </div>
          </div>
          <div className="flex justify-between items-end mt-14">
            <div>
              <h1 className="uppercase text-lg tracking-widest opacity-45">
                Web Developer
              </h1>
              <div className="flex gap-3 items-center">
                <a
                  href="mailto:hasiburrahmanakash79@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <img
                    className="h-4"
                    src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
                    alt="Email"
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <img
                    className="h-5"
                    src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <img
                    className="h-4"
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-icon-white-PNG-large-size.png"
                    alt="Facebook"
                  />
                </a>
                <p>/ hasiburRahmanAkash</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="h-6"
                src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png"
                alt="Tailwind CSS"
              />
              <img
                className="h-6"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="React"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}