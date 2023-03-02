// import React from "react";
// import { getAuth, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// export default function Home() {
//   const navigate = useNavigate();
//   const handleLogOut = () => {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         console.log("Sign out successful");
//         navigate("/");
//       })
//       .catch((error) => {
//         console.log("An error happened");
//       });
//   };

//   return (
//     <div>
//       Home
//       <button onClick={handleLogOut}>Sign Out</button>
//     </div>
//   );
// }
