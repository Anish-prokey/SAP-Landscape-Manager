// import React, { useState, useEffect } from 'react';
// import h_blue_logo from '../img/h_blue_logo.png';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import '../css/Home.css';
// import '../statistics/index.css';
// import data from './product.json';

// export default function App() {
//   const [activeNavItem, setActiveNavItem] = useState('statistics');
//   const [selectedSystem, setSelectedSystem] = useState(null);
//   const [systems, setSystems] = useState([]);

//   useEffect(() => {
//     // Parse the JSON data and group timelines by Sap_System_ID
//     const groupedSystems = {};
//     data.forEach((item) => {
//       if (!groupedSystems[item.Sap_System_ID]) {
//         groupedSystems[item.Sap_System_ID] = [];
//       }
//       groupedSystems[item.Sap_System_ID].push(item);
//     });
//     // Update the systems state
//     setSystems(groupedSystems);
//   }, []);

//   const handleNavItemClick = (navItem) => {
//     setActiveNavItem(navItem);
//   };

//   const HorizontalTimeline = ({ timelines }) => {
//     useEffect(() => {
//       timelines.forEach((timeline, index) => {
//         const timelineElement = document.getElementById(
//           `horizontal-timeline-${index}`
//         );
//         if (timelineElement) {
//           activation(timelineElement);
//         }
//       });
//     }, [timelines]);

//     const activation = (timelineElement) => {
//       const divs = timelineElement.querySelectorAll('div');
//       for (let i = 0; i < divs.length; i++) {
//         if (
//           divs[i].classList.contains('circle') ||
//           divs[i].classList.contains('link')
//         ) {
//           divs[i].style.background = '#05A5D1';
//           if (divs[i].classList.contains('activated')) {
//             break;
//           }
//         }
//       }
//     };

//     return (
//       <div className="timeline-container">
//         {timelines.map((timeline, index) => (
//           <div
//             id={`horizontal-timeline-${index}`}
//             className="timeline horizontal reverse"
//             key={index}
//           >
//             <div className="timeline-box">
//               <div className="block">
//                 <div className="square up">
//                   <h3>{timeline.Product_name}</h3>
//                   <h4></h4>
//                   <p>Version: {timeline.Previous_version}</p>
//                 </div>
//                 <div className="circle">
//                   <p>{timeline.Previous_installed}</p>
//                 </div>
//                 <div className="link"></div>
//                 <div className="square down blank"></div>
//               </div>
//               <div className="block">
//                 <div className="square up blank"></div>
//                 <div className="circle activated">
//                   <p>{timeline.Installed_year}</p>
//                 </div>
//                 <div className="link"></div>
//                 <div className="square down">
//                   <h3>{timeline.Product_name}</h3>
//                   <p>Version: {timeline.Version}</p>
//                 </div>
//               </div>
//               <div id="end"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const handleSystemChange = (event) => {
//     setSelectedSystem(event.target.value);
//   };

//   return (
//     <>
//       <nav className="nav navbar navbar-expand-lg navbar-light bg-light py-0">
//         <div className="nav container-fluid">
//           <a
//             className="navbar-brand"
//             href="https://www.tysonfoods.com/"
//             target="_blank"
//           >
//             <img
//               src={h_blue_logo}
//               className="logo img-fluid rounded-top"
//               alt="tyson logo"
//             />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'landscape' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('landscape')}
//                   aria-current="page"
//                   href="/landscape"
//                 >
//                   SAP Landscape
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'statistics' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('statistics')}
//                   href="../statistics/index.html"
//                 >
//                   Statistics
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'logs' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('logs')}
//                   href="../logs/index.html"
//                 >
//                   Logs
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <h1>This is the statistics page</h1>
//       <div>
//         <select value={selectedSystem} onChange={handleSystemChange}>
//           <option value={null}>Select SAP System ID</option>
//           {Object.keys(systems).map((systemId, index) => (
//             <option key={index} value={systemId}>
//               System ID: {systemId}
//             </option>
//           ))}
//         </select>
//         {selectedSystem && (
//           <div>
//             <h2>Selected System: {selectedSystem}</h2>
//             <HorizontalTimeline timelines={systems[selectedSystem]} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }


//Before change of the group by products.
// import React, { useState, useEffect } from 'react';
// import h_blue_logo from '../img/h_blue_logo.png';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import '../css/Home.css';
// import data from './product.json';

// export default function App() {
//   const [activeNavItem, setActiveNavItem] = useState('statistics');
//   const [selectedSystem, setSelectedSystem] = useState(null);
//   const [systems, setSystems] = useState([]);

//   useEffect(() => {
//     // Parse the JSON data and group timelines by Sap_System_ID
//     const groupedSystems = {};
//     data.forEach((item) => {
//       if (!groupedSystems[item.Sap_System_ID]) {
//         groupedSystems[item.Sap_System_ID] = [];
//       }
//       groupedSystems[item.Sap_System_ID].push(item);
//     });
//     // Update the systems state
//     setSystems(groupedSystems);
//   }, []);

//   const handleNavItemClick = (navItem) => {
//     setActiveNavItem(navItem);
//   };

//   const HorizontalTimeline = ({ timelines }) => {
//     useEffect(() => {
//       timelines.forEach((timeline, index) => {
//         const timelineElement = document.getElementById(
//           `horizontal-timeline-${index}`
//         );
//         if (timelineElement) {
//           activation(timelineElement);
//         }
//       });
//     }, [timelines]);

//     const activation = (timelineElement) => {
//       const divs = timelineElement.querySelectorAll('div');
//       for (let i = 0; i < divs.length; i++) {
//         if (
//           divs[i].classList.contains('circle') ||
//           divs[i].classList.contains('link')
//         ) {
//           divs[i].style.background = '#05A5D1';
//           if (divs[i].classList.contains('activated')) {
//             break;
//           }
//         }
//       }
//     };

//     return (
//         <div className="timeline-container">
//         {timelines.map((timeline, index) => (
//           <div className="timeline horizontal reverse" key={index}>
//             <div className="timeline-box">
//               <div className="block">
//                 <div className="square up">
//                   <h3>{timeline.Product_name}</h3>
//                   <h4></h4>
//                   <p>Version: {timeline.Previous_version}</p>
//                 </div>
//                 <div className="circle">
//                   <p>{timeline.Previous_installed}</p>
//                 </div>
//                 <div className="link"></div>
//                 <div className="square down blank"></div>
//               </div>
//               <div className="block">
//                 <div className="square up blank"></div>
//                 <div className="circle activated">
//                   <p>{timeline.Installed_year}</p>
//                 </div>
//                 <div className="link"></div>
//                 <div className="square down">
//                   <h3>{timeline.Product_name}</h3>
//                   <p>Version: {timeline.Version}</p>
//                 </div>
//               </div>
//               <div id="end"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//           );
//   };

//   const handleSystemChange = (event) => {
//     setSelectedSystem(event.target.value);
//   };

//   return (
//     <>
//       <nav className="nav navbar navbar-expand-lg navbar-light bg-light py-0">
//         <div className="nav container-fluid">
//           <a
//             className="navbar-brand"
//             href="https://www.tysonfoods.com/"
//             target="_blank"
//           >
//             <img
//               src={h_blue_logo}
//               className="logo img-fluid rounded-top"
//               alt="tyson logo"
//             />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'landscape' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('landscape')}
//                   aria-current="page"
//                   href="/landscape"
//                 >
//                   SAP Landscape
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'statistics' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('statistics')}
//                   href="../statistics/index.html"
//                 >
//                   Statistics
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'logs' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('logs')}
//                   href="../logs/index.html"
//                 >
//                   Logs
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* <h1 className="page-title">Statistics Page</h1> */}
//       <div>
//         <select value={selectedSystem} onChange={handleSystemChange}>
//           <option value={null}>Select SAP System ID</option>
//           {Object.keys(systems).map((systemId, index) => (
//             <option key={index} value={systemId}>
//               System ID: {systemId}
//             </option>
//           ))}
//         </select>
//         {selectedSystem && (
//           <div>
//             <h2>Selected System: {selectedSystem}</h2>
//             <HorizontalTimeline timelines={systems[selectedSystem]} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import h_blue_logo from '../img/h_blue_logo.png';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import '../css/Home.css';
// import data from './productData.json';

// export default function App() {
//   const [activeNavItem, setActiveNavItem] = useState('statistics');
//   const [selectedSystem, setSelectedSystem] = useState(null);
//   const [systems, setSystems] = useState([]);

//   useEffect(() => {
//     // Parse the JSON data and group timelines by Sap_System_ID
//     const groupedSystems = {};
    
//     data.forEach((item) => {
//       if (!groupedSystems[item.Product_name]) {
//         groupedSystems[item.Product_name] = [];
//       }
//       groupedSystems[item.Product_name].push(item);
//     });
//     // Update the systems state
//     console.log(groupedSystems)
//     setSystems(groupedSystems);
//   }, []);

//   const handleNavItemClick = (navItem) => {
//     setActiveNavItem(navItem);
//   };

//   const HorizontalTimeline = ({ timelines }) => {
//     useEffect(() => {
//       timelines.forEach((timeline, index) => {
//         const timelineElement = document.getElementById(
//           `horizontal-timeline-${index}`
//         );
//         if (timelineElement) {
//           activation(timelineElement);
//         }
//       });
//     }, [timelines]);

//     const activation = (timelineElement) => {
//       const divs = timelineElement.querySelectorAll('div');
//       for (let i = 0; i < divs.length; i++) {
//         if (
//           divs[i].classList.contains('circle') ||
//           divs[i].classList.contains('link')
//         ) {
//           divs[i].style.background = '#05A5D1';
//           if (divs[i].classList.contains('activated')) {
//             break;
//           }
//         }
//       }
//     };

//     return (
//         <div className="timeline-container">
//         {timelines.map((timeline, index) => (
//           <div className="timeline horizontal reverse" key={index}>
//             <div className="timeline-box">
//               <div className="block">
//                 <div className="square up">
//                   <h3>{timeline.Sap_System_ID}</h3>
//                   <h4></h4>
//                   <p><b>Version: {timeline.Previous_version}</b></p>
//                 </div>
//                 <div className="circle">
//                   <p>{timeline.Previous_installed}</p>
//                 </div>
//                 <div className="link"></div>
//                 <div className="square down blank"></div>
//               </div>
//               <div className="block">
//                 <div className="square up blank"></div>
//                 <div className="circle activated">
//                   <p>{timeline.Installed_year}</p>
//                 </div>
//                 <div className="link"></div>
//                 <div className="square down">
//                   <h3>{timeline.Sap_System_ID}</h3>
//                   <p><b>Version: {timeline.Version}</b></p>
//                 </div>
//               </div>
//               <div id="end"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//           );
//   };

//   const handleSystemChange = (event) => {
//     setSelectedSystem(event.target.value);
//   };

//   return (
//     <>
//       <nav className="nav navbar navbar-expand-lg navbar-light bg-light py-0">
//         <div className="nav container-fluid">
//           <a
//             className="navbar-brand"
//             href="https://www.tysonfoods.com/"
//             target="_blank"
//           >
//             <img
//               src={h_blue_logo}
//               className="logo img-fluid rounded-top"
//               alt="tyson logo"
//             />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'landscape' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('landscape')}
//                   aria-current="page"
//                   href="/landscape"
//                 >
//                   SAP Landscape
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'statistics' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('statistics')}
//                   href="../statistics/index.html"
//                 >
//                   Statistics
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'logs' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('logs')}
//                   href="../logs/index.html"
//                 >
//                   Logs
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* <h1 className="page-title">Statistics Page</h1> */}
//       <div>
//         <select value={selectedSystem} onChange={handleSystemChange}>
//           <option value={null}>Select a SAP Product</option>
//           {Object.keys(systems).map((systemId, index) => (
//             <option key={index} value={systemId}>
//               Product Name: {systemId}
//             </option>
//           ))}
//         </select>
//         {selectedSystem && (
//           <div>
//             <h2>Product Name:  {selectedSystem}</h2>
//             <HorizontalTimeline timelines={systems[selectedSystem]} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }


// 

//Roll back here

// import React, { useState, useEffect } from 'react';
// import h_blue_logo from '../img/h_blue_logo.png';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import '../css/Home.css';
// import data from './productData.json';

// export default function App() {
//   const [activeNavItem, setActiveNavItem] = useState('statistics');
//   const [selectedSystem, setSelectedSystem] = useState(null);
//   const [systems, setSystems] = useState([]);

//   useEffect(() => {
//     // Parse the JSON data and group timelines by Sap_System_ID
//     const groupedSystems = {};

//     data.forEach((item) => {
//       if (!groupedSystems[item.Product_name]) {
//         groupedSystems[item.Product_name] = [];
//       }
//       groupedSystems[item.Product_name].push(item);
//     });
//     // Update the systems state
//     console.log(groupedSystems);
//     setSystems(groupedSystems);
//   }, []);

//   const handleNavItemClick = (navItem) => {
//     setActiveNavItem(navItem);
//   };

//   const HorizontalTimeline = ({ timelines }) => {
//     useEffect(() => {
//       timelines.forEach((timeline, index) => {
//         const timelineElement = document.getElementById(`horizontal-timeline-${index}`);
//         if (timelineElement) {
//           activation(timelineElement);
//         }
//       });
//     }, [timelines]);
  
//     const activation = (timelineElement) => {
//       const divs = timelineElement.querySelectorAll('div');
//       for (let i = 0; i < divs.length; i++) {
//         if (divs[i].classList.contains('circle') || divs[i].classList.contains('link')) {
//           divs[i].style.background = '#05A5D1';
//           if (divs[i].classList.contains('activated')) {
//             break;
//           }
//         }
//       }
//     };
  
//     return (
//       <div className="timeline-container">
//         {timelines.map((timeline, index) => (
//           <div className="timeline" key={index} id={`horizontal-timeline-${index}`}>
//             <div className="circle">
//               <p>{timeline.Previous_installed}</p>
//             </div>
//             <div className="link"></div>
//             <div className="square">
//               <h3>{timeline.Sap_System_ID}</h3>
//               <p>
//                 <b>Version: {timeline.Previous_version}</b>
//               </p>
//             </div>
//             <div className="link"></div>
//             <div className="circle_activated">
//               <p>{timeline.Installed_year}</p>
//             </div>
//             <div className="link"></div>
//             <div className="squareCurr">
//               <h3>{timeline.Sap_System_ID}</h3>
//               <p>
//                 <b>Version: {timeline.Version}</b>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   const handleSystemChange = (event) => {
//     setSelectedSystem(event.target.value);
//   };

//   return (
//     <>
//       <nav className="nav navbar navbar-expand-lg navbar-light bg-light py-0">
//         <div className="nav container-fluid">
//           <a
//             className="navbar-brand"
//             href="https://www.tysonfoods.com/"
//             target="_blank"
//           >
//             <img
//               src={h_blue_logo}
//               className="logo img-fluid rounded-top"
//               alt="tyson logo"
//             />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'landscape' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('landscape')}
//                   aria-current="page"
//                   href="/landscape"
//                 >
//                   SAP Landscape
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'statistics' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('statistics')}
//                   href="../statistics/index.html"
//                 >
//                   Statistics
//                 </a>
//               </li>
//               <li className="nav-item">
//                 {/* <a
//                   className={`nav-link mt-2 mx-5 ${
//                     activeNavItem === 'logs' ? 'active' : ''
//                   }`}
//                   onClick={() => handleNavItemClick('logs')}
//                   href="../logs/index.html"
//                 >
//                   Logs
//                 </a> */}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="d-flex justify-content-center">
//         <div className="dropdown-container"> {/* Add the dropdown container */}
//           <select value={selectedSystem} onChange={handleSystemChange}>
//             <option value={null}>Select SAP System ID</option>
//             {Object.keys(systems).map((systemId, index) => (
//               <option key={index} value={systemId}>
//                 Product Name: {systemId}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       {selectedSystem && (
//         <div>
//           <HorizontalTimeline timelines={systems[selectedSystem]} />
//         </div>
//       )}
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import h_blue_logo from '../img/h_blue_logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/Home.css';
// import data from './productData.json';

export default function App() {
  const [activeNavItem, setActiveNavItem] = useState('statistics');
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.npoint.io/b27397e82bbf3a321651');
        if (response.ok) {
          const data = await response.json();
          const groupedSystems = {};

          data.forEach((item) => {
            if (!groupedSystems[item.Product_name]) {
              groupedSystems[item.Product_name] = [];
            }
            groupedSystems[item.Product_name].push(item);
          });

          setSystems(groupedSystems);
        } else {
          console.error('Failed to fetch systems:', response.status);
        }
      } catch (error) {
        console.error('Error fetching systems:', error);
      }
    };

    fetchData();
  }, []);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  // const handleSystemChange = (event) => {
  //   setSelectedSystem(event.target.value);
  // };
  const HorizontalTimeline = ({ timelines }) => {
    useEffect(() => {
      timelines.forEach((timeline, index) => {
        const timelineElement = document.getElementById(`horizontal-timeline-${index}`);
        if (timelineElement) {
          activation(timelineElement);
        }
      });
    }, [timelines]);

    const activation = (timelineElement) => {
      const divs = timelineElement.querySelectorAll('div');
      for (let i = 0; i < divs.length; i++) {
        if (divs[i].classList.contains('circle') || divs[i].classList.contains('link')) {
          divs[i].style.background = '#05A5D1';
          if (divs[i].classList.contains('activated')) {
            break;
          }
        }
      }
    };

    return (
      <div className="timeline-container">
        {timelines.map((timeline, index) => (
          <div className="timeline horizontal reverse" key={index}>
            <div className="timeline-box">
              <div className="block">
                <div className="square up">
                  <h3>{timeline.Sap_System_ID}</h3>
                  <h4></h4>
                  <p>
                    <b>Version: {timeline.Previous_version}</b>
                  </p>
                </div>
                <div className="circle">
                  <p>{timeline.Previous_installed}</p>
                </div>
                <div className="link"></div>
                <div className="square down blank"></div>
              </div>
              <div className="block">
                <div className="square up blank"></div>
                <div className="circle activated">
                  <p1>{timeline.Installed_year}</p1>
                </div>
                <div className="link"></div>
                <div className="square down">
                  <h3>{timeline.Sap_System_ID}</h3>
                  <p>
                    <b>Version: {timeline.Version}</b>
                  </p>
                </div>
              </div>
              <div id="end"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleSystemChange = (event) => {
    setSelectedSystem(event.target.value);
  };

  return (
    <>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light py-0">
        <div className="nav container-fluid">
          <a
            className="navbar-brand"
            href="https://www.tysonfoods.com/"
            target="_blank"
          >
            <img
              src={h_blue_logo}
              className="logo img-fluid rounded-top"
              alt="tyson logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link mt-2 mx-5 ${
                    activeNavItem === 'landscape' ? 'active' : ''
                  }`}
                  onClick={() => handleNavItemClick('landscape')}
                  aria-current="page"
                  href="/landscape"
                >
                  SAP Landscape
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link mt-2 mx-5 ${
                    activeNavItem === 'statistics' ? 'active' : ''
                  }`}
                  onClick={() => handleNavItemClick('statistics')}
                  href="../statistics/index.html"
                >
                  Statistics
                </a>
              </li>
              <li className="nav-item">
                {/* <a
                  className={`nav-link mt-2 mx-5 ${
                    activeNavItem === 'logs' ? 'active' : ''
                  }`}
                  onClick={() => handleNavItemClick('logs')}
                  href="../logs/index.html"
                >
                  Logs
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center">
        <div className="dropdown-container">
          <select value={selectedSystem} onChange={handleSystemChange}>
            <option value={null}>Select SAP System ID</option>
            {Object.keys(systems).map((systemId, index) => (
              <option key={index} value={systemId}>
                Product Name: {systemId}
              </option>
            ))}
          </select>
        </div>
      </div>
      {selectedSystem && (
        <div>
          <HorizontalTimeline timelines={systems[selectedSystem]} />
        </div>
      )}
    </>
  );
}
