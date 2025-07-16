import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Retrieve user and admin info from local storage
  const storedUserInfo = localStorage.getItem("userInfo");
  const storedAdminInfo = localStorage.getItem("adminInfo");

  // Parse JSON data if available
  const [user, setUser] = useState(storedUserInfo ? JSON.parse(storedUserInfo) : null);
  const [admin, setAdmin] = useState(storedAdminInfo ? JSON.parse(storedAdminInfo) : null);

  // Login function for users
  const loginUser = (userData) => {
    console.log("user login")
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setUser(userData);
  };

  // Logout function for users
  const logoutUser = () => {
    console.log("user logout")
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  // Login function for admins
  const loginAdmin = (adminData) => {
    console.log("admin login")
    localStorage.setItem("adminInfo", JSON.stringify(adminData));
    setAdmin(adminData);
  };

  // Logout function for admins
  const logoutAdmin = () => {
    console.log("admin logout")
    localStorage.removeItem("adminInfo");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        admin,
        loginUser,
        logoutUser,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// import { createContext, useState } from "react";

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   // Retrieve user and admin info from session storage
//   const storedUserInfo = sessionStorage.getItem("userInfo");
//   const storedAdminInfo = sessionStorage.getItem("adminInfo");

//   // Parse JSON data if available
//   const [user, setUser] = useState(storedUserInfo ? JSON.parse(storedUserInfo) : null);
//   const [admin, setAdmin] = useState(storedAdminInfo ? JSON.parse(storedAdminInfo) : null);

//   // Login function for users
//   const loginUser = (userData) => {
//     console.log("user login");
//     sessionStorage.setItem("userInfo", JSON.stringify(userData));
//     setUser(userData);
//   };

//   // Logout function for users
//   const logoutUser = () => {
//     console.log("user logout");
//     sessionStorage.removeItem("userInfo");
//     setUser(null);
//   };

//   // Login function for admins
//   const loginAdmin = (adminData) => {
//     console.log("admin login");
//     sessionStorage.setItem("adminInfo", JSON.stringify(adminData));
//     setAdmin(adminData);
//   };

//   // Logout function for admins
//   const logoutAdmin = () => {
//     console.log("admin logout");
//     sessionStorage.removeItem("adminInfo");
//     setAdmin(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         admin,
//         loginUser,
//         logoutUser,
//         loginAdmin,
//         logoutAdmin,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
