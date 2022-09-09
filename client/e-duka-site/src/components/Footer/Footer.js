import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <h3>2022 Copyright E-Duka-Site</h3>
    </div>
  );
}

// import React, { useState } from "react";
// import "../Footer/Footer.css";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
//   FaArrowUp,
// } from "react-icons/fa";
// // import footerImg from "./images/doctor3.jpg";

// function Footer() {
//   const [formData, setFormData] = useState({});
//   const [addCommentData, setAddCommentData] = useState(null);
//   function handleChange(event) {
//     // setAddCommentData( {
//     //   ...addCommentData, [ event.target.name ]: event.target.value,

//     // } );

//     const name = event.target.name;
//     setFormData({ ...FormData, [name]: name });
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//     // console.log( formData );
//     setAddCommentData({
//       ...addCommentData,
//       name: "",
//     });
//   }
//   return (
//     <footer className="footer-sec">
//       <div className="footer">
//         <div className="footer-sections">
//           {/* <div className="footer-image">
//             <img src={footerImg} />
//           </div> */}

//           <div className="social">
//             <div id="htwo" class="dark">
//               <h3>Let's Stay In Touch</h3>
//             </div>
//             <ul>
//               <a target={"_blank"}>
//                 <li>
//                   <FaTwitter />
//                 </li>
//               </a>
//               <a
//                 target={"_blank"}
//               >
//                 <li>
//                   <FaInstagram />
//                 </li>
//               </a>
//               <a
//                 target={"_blank"}
//               >
//                 <li>
//                   <FaFacebook />
//                 </li>
//               </a>
//               <a
//                 target={"_blank"}
//               >
//                 <li>
//                   <FaLinkedin />
//                 </li>
//               </a>
//             </ul>
//           </div>
//           <div>

//           </div>
//         </div>
//       </div>
//       <div class="foot">
//         <hr></hr>
//         <h5>
//          All rights reserved <br /> copyright reserved <br />
//           <a href="/" class="up">
//             <FaArrowUp />
//           </a>
//         </h5>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
