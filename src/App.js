// import React from "react";
// import Selfintro from "./components/selfintro";

// function App() {
//   return (
//     <div>
//       <Selfintro />
//     </div>
//   );
// }

// export default App;


//task 2

// import "./App.css";
// import Parent from "./components/parent";

// function App() {
//   return (
//     <div className="app">
//       <h1>User Details</h1>

//       <Parent />
//     </div>
//   );
// }

// export default App;


//task 3


// import "./App.css";
// import Task3 from "./components/task3";

// function App() {
//   return (
//     <div>
//       <Task3 />
//     </div>
//   );
// }

// export default App;


//task4

// import "./App.css";
// import Task4 from "./components/task4";

// function App() {
//   return (
//     <div>
//       <Task4 />
//     </div>
//   );
// }

// export default App;

//task5

// import "./App.css";
// import Task5 from "./components/task5";

// function App() {
//   return (
//     <div>
//       <Task5 />
//     </div>
//   );
// }

// export default App;

//task6

// import "./App.css";
// import Task6 from "./components/task6";

// function App() {
//   return (
//     <div>
//       <Task6 />
//     </div>
//   );
// }

// export default App;

//task7
// import "./App.css";
// import Task7 from "./components/task7";

// function App() {
//   return (
//     <div>
//       <Task7 />
//     </div>
//   );
// }

// export default App;

// task8

// import React, { createContext, useState } from "react";
// import "./App.css";
// import Form from "./components/task8";

// // Create Context

// export const FormContext = createContext();

// function App() {

//   // Form Data State

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     city: "",
//   });

//   // Theme State

//   const [darkMode, setDarkMode] = useState(false);

//   // Handle Input Change

//   const handleChange = (event) => {

//     const { name, value } = event.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//   };

//   // Toggle Theme

//   const toggleTheme = () => {

//     setDarkMode(!darkMode);

//   };

//   return (

//     <FormContext.Provider
//       value={{
//         formData,
//         handleChange,
//         darkMode,
//         toggleTheme,
//       }}
//     >

//       <div className={darkMode ? "dark container" : "light container"}>

//         <Form />

//       </div>

//     </FormContext.Provider>

//   );
// }

// export default App;

//minichat

// import React from "react";
// import "./App.css";
// import MiniChatApp from "./components/minichat";

// function App() {
//   return (
//     <div>
//       <MiniChatApp />
//     </div>
//   );
// }

// export default App;

//task 10

// import React from "react";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import "./App.css";

// import Navbar from "./components/Routing/navbar";
// import Home from "./components/Routing/home";
// import About from "./components/Routing/about";
// import Services from "./components/Routing/service";
// import WebDevelopment from "./components/Routing/webdevelop";
// import AppDevelopment from "./components/Routing/appdev";
// import UIDesign from "./components/Routing/uidesign";
// import Contact from "./components/Routing/contact";
// import Profile from "./components/Routing/profile";

// function App() {

//   return (

//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/contact" element={<Contact />} />

//         <Route path="/profile" element={<Profile />} />

//         {/* Nested Routing */}

//         <Route path="/services" element={<Services />}>

//           <Route
//             path="web-development"
//             element={<WebDevelopment />}
//           />

//           <Route
//             path="app-development"
//             element={<AppDevelopment />}
//           />

//           <Route
//             path="ui-ux-design"
//             element={<UIDesign />}
//           />

//         </Route>

//       </Routes>

//     </BrowserRouter>

//   );
// }

// export default App;


// task11

// import React from "react";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import "./App.css";

// import Navbar from "./components/Navbar";
// import UserList from "./components/UserList";
// import UserDetails from "./components/UserDetails";

// function App() {

//   return (

//     <BrowserRouter>

//       <Navbar />

//       <Routes>

        // {/* User List Page */}

        // <Route
        //   path="/"
        //   element={<UserList />}
        // />

        // {/* User Details Page */}

        // <Route
        //   path="/user/:userId"
        //   element={<UserDetails />}
        // />

      // </Routes>

    // </BrowserRouter>

  // );
// }

// export default App;


// task12
// import React from "react";
// import "./App.css";
// import TicTacToe from "./components/task12";

// function App() {
//   return (
//     <div>
//       <TicTacToe />
//     </div>
//   );
// }

// export default App;

// task13

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DirectoryViewer from "./components/task13";
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<DirectoryViewer />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// task14

// import React from "react";
// import "./App.css";

// import EmployeeTable
// from "./components/EmployeeTable";

// function App() {

//   return (

//     <div>

//       <EmployeeTable />

//     </div>

//   );

// }

// export default App;


// task15

import React from "react";
import "./App.css";
import RecordManagement from "./components/record";

function App() {
  return (
    <div>
      <RecordManagement />
    </div>
  );
}

export default App;