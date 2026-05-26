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

import React from "react";
import "./App.css";
import MiniChatApp from "./components/minichat";

function App() {
  return (
    <div>
      <MiniChatApp />
    </div>
  );
}

export default App;