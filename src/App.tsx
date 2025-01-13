// // // import Footer from "./Footer/Footer";
// // // import SolarSystemGame from "./Game/SolarSystemGame";
// // // import HabitTracker from "./HabitTracker/HabitTracker";
// // // import Header from "./Header/Header";

// // // function App() {
// // //   return (
// // //     <>
// // //       <div>
// // //         <Header />
// // //         <HabitTracker />
// // //         <SolarSystemGame />
// // //         <Footer />
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default App;

// // // src/App.tsx
// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Header from "./Header/Header";
// // import Contact from "./contact/Contact";
// // import HabitTracker from "./HabitTracker/HabitTracker";
// // import Footer from "./Footer/Footer";
// // import SolarSystemGame from "./Game/SolarSystemGame";

// // const App: React.FC = () => {
// //   return (
// //     <Router>
// //       <Header />
// //       <Routes>
// //         {/* Define Routes for the components */}
// //         <Route path="/contact" element={<Contact />} />
// //         {/* Other Routes */}
// //         <Route path="/" element={<HabitTracker />} />
// //         {/* Additional routes here */}
// //         <Route path="*" element={<h1>404 Not Found</h1>} />
// //       </Routes>
// //       <SolarSystemGame />
// //       <Footer />
// //     </Router>
// //   );
// // };

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Header/Header";
// import Contact from "./contact/Contact";
// import HabitTracker from "./HabitTracker/HabitTracker";
// import Footer from "./Footer/Footer";
// import SolarSystemGame from "./Game/SolarSystemGame";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div>
//         {/* Header is outside Routes so it is displayed on every page */}
//         <Header />
//         {/* Main Routes for different components */}
//         <Routes>
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/" element={<HabitTracker />} />
//           {/* Add more routes as needed */}
//           <Route path="*" element={<h1>404 Not Found</h1>} />
//         </Routes>
//         <SolarSystemGame />
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";

// // Lazy load the components
// const Contact = React.lazy(() => import("./contact/Contact"));
// const HabitTracker = React.lazy(() => import("./HabitTracker/HabitTracker"));
// const SolarSystemGame = React.lazy(() => import("./Game/SolarSystemGame"));

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div>
//         {/* Header is always rendered, independent of routes */}
//         <Header />

//         {/* Suspense to show fallback UI while components are loading */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/" element={<HabitTracker />} />
//             {/* More routes can be added as needed */}
//             <Route path="*" element={<h1>404 Not Found</h1>} />
//           </Routes>
//         </Suspense>

//         {/* Lazy-loaded SolarSystemGame component */}
//         <Suspense fallback={<div>Loading Game...</div>}>
//           <SolarSystemGame />
//         </Suspense>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";

// // Lazy load the components
// const Contact = React.lazy(() => import("./contact/Contact"));
// const HabitTracker = React.lazy(() => import("./HabitTracker/HabitTracker"));
// const SolarSystemGame = React.lazy(() => import("./Game/SolarSystemGame"));

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div>
//         {/* Header is always rendered, independent of routes */}
//         <Header />

//         {/* Suspense to show fallback UI while components are loading */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/" element={<HabitTracker />} />
//             {/* More routes can be added as needed */}
//             <Route path="*" element={<h1>404 Not Found</h1>} />
//           </Routes>
//         </Suspense>

//         {/* Lazy-loaded SolarSystemGame component */}
//         <Suspense fallback={<div>Loading Game...</div>}>
//           <SolarSystemGame />
//         </Suspense>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";

// // Lazy load the Contact component
// const Contact = React.lazy(() => import("./contact/Contact"));
// const HabitTracker = React.lazy(() => import("./HabitTracker/HabitTracker"));
// const SolarSystemGame = React.lazy(() => import("./Game/SolarSystemGame"));

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div>
//         {/* Header is always rendered, independent of routes */}
//         <Header />

//         {/* Suspense to show fallback UI while components are loading */}
//         <Suspense fallback={<div>Loading Contact...</div>}>
//           <Routes>
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/" element={<HabitTracker />} />
//             <Route path="*" element={<h1>404 Not Found</h1>} />
//           </Routes>
//         </Suspense>

//         {/* Lazy-loaded SolarSystemGame component */}
//         <Suspense fallback={<div>Loading Game...</div>}>
//           <SolarSystemGame />
//         </Suspense>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { Suspense } from "react";
// import "./App.css"; // Add global styles if needed

// // Lazy load the Contact component
// const LazyContact = React.lazy(() => import("./contact/Contact"));

// const App: React.FC = () => {
//   return (
//     <div className="app-container">
//       <header>
//         <h1>Welcome to Our Website</h1>
//         <p>Explore and connect with us!</p>
//       </header>
//       <main>
//         {/* Lazy loaded Contact component wrapped in Suspense */}
//         <Suspense fallback={<div>Loading Contact Form...</div>}>
//           <LazyContact path="/contact" />
//         </Suspense>
//       </main>
//       <footer>
//         <p>© 2025 Your Company. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy load components
const LazyContact = React.lazy(() => import("./contact/Contact"));
const LazyHabitTracker = React.lazy(
  () => import("./HabitTracker/HabitTracker")
);
const LazySolarSystemGame = React.lazy(() => import("./Game/SolarSystemGame"));
const LazyNotFound = React.lazy(() => import("./notFound/NotFound"));
const Header = React.lazy(() => import("./Header/Header"));
const Footer = React.lazy(() => import("./Footer/Footer"));

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <main>
          <Suspense fallback={<div>Loading Content...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <LazyHabitTracker />
                    <LazySolarSystemGame />
                  </div>
                }
              />
              <Route path="/contact" element={<LazyContact />} />
              <Route path="*" element={<LazyNotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
