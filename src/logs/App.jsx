// import Header from "../components/Header";
// import h_blue_logo from "../img/h_blue_logo.png"
// import h_white_logo from "../img/h_white_logo.png"
// import v_blue_logo from "../img/v_blue_logo.png"
// import v_white_logo from "../img/v_white_logo.png"
// import profile_logo from "../img/profile.png"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import '../css/Home.css'
// import { useEffect, useState } from "react";
// // import { useEffect } from 'react';
// import axios from 'axios';
// export default function App() {
//     const [activeNavItem, setActiveNavItem] = useState('logs');
//     // handle click for nav item
//     const handleNavItemClick = (navItem) => {
//         setActiveNavItem(navItem);

        
//     };

//     // function logspage(){
//     //     const [refreshCount, setRefreshCount] = useState(0);

// //   useEffect(() => {
// //     // Increment the refresh count when the component mounts
// //     setRefreshCount((prevCount) => prevCount + 1);
// //   }, []);

//   return (
//     <div>
//         <>
//       <h1>Logs Page</h1>
//       <p>Refresh Count: {refreshCount}</p>
//       {/* Your other JSX content */}
//       <nav class="nav navbar navbar-expand-lg navbar-light bg-light py-0">
//                 <div class="nav container-fluid">
//                     <a class="navbar-brand" href="https://www.tysonfoods.com/" target="_blank"> <img src={h_blue_logo} class="logo img-fluid rounded-top" alt="tyson logo" /></a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a  className={`nav-link mt-2 mx-5 ${activeNavItem === 'landscape' ? 'active' : ''}`}
//             onClick={() => handleNavItemClick('landscape')} aria-current="page" href="/landscape"
//                                 >SAP Landscape</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a className={`nav-link mt-2 mx-5 ${activeNavItem === 'statistics' ? 'active' : ''}`}
//                                     onClick={() => handleNavItemClick('statistics')} href="../statistics/index.html" >Statistics</a>
//                             </li>
//                             {/* <li class="nav-item">
//                                 <a className={`nav-link mt-2 mx-5 ${activeNavItem === 'logs' ? 'active' : ''}`}
//                                     onClick={() => handleNavItemClick('logs')} href="../logs/index.html">Logs</a>
//                             </li> */}
                           

//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         <h1>This is Logs page</h1>
//         </>
        
//     </div>
//   );
// }




// import Header from "../components/Header";
// import h_blue_logo from "../img/h_blue_logo.png"
// import h_white_logo from "../img/h_white_logo.png"
// import v_blue_logo from "../img/v_blue_logo.png"
// import v_white_logo from "../img/v_white_logo.png"
// import profile_logo from "../img/profile.png"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import '../css/Home.css'
// import { useEffect, useState } from "react";
// // import downloadCount from 'src/components/Home.jsx';
// // import shareCount from 'src/components/Home.jsx'
// import axios from 'axios';
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// // import LogsPage from './LogsPage';
// // import { CountProvider } from './countContext';

// import { useEffect } from 'react';
// import axios from 'axios';


// export default function App() {
//     const [downloadCount, setDownloadCount]=useState(0);
//     const[shareCount, setShareCount] = useState(0)
//     return (
//       <>
//         {/* Your existing Logs component code */}
//         <h1>Download Count: {downloadCount}</h1>
//         {/* Additional Logs component code */}
//       </>
//     );
//   }
  
    
  // useEffect(() => {
  //   // Fetch download count from API
  //   axios.get("http://localhost:3000/api/downloadCount")
  //     .then(response => {
  //       setDownloadCount(response.data.count);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching download count:", error);
  //     });

  //   // Fetch share count from API
  //   axios.get("http://localhost:3000/api/shareCount")
  //     .then(response => {
  //       setShareCount(response.data.count);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching share count:", error);
  //     });
  // }, [])

    // Use the downloadCount prop in your Logs component
   
//     const [activeNavItem, setActiveNavItem] = useState('logs');
//     // handle click for nav item
//     const handleNavItemClick = (navItem) => {
//         setActiveNavItem(navItem);

        
//     };

//     console.log(downloadCount);
//     console.log(shareCount);


//   return (
//         <>
//       <nav class="nav navbar navbar-expand-lg navbar-light bg-light py-0">
//                 <div class="nav container-fluid">
//                     <a class="navbar-brand" href="https://www.tysonfoods.com/" target="_blank"> <img src={h_blue_logo} class="logo img-fluid rounded-top" alt="tyson logo" /></a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a  className={`nav-link mt-2 mx-5 ${activeNavItem === 'landscape' ? 'active' : ''}`}
//             onClick={() => handleNavItemClick('landscape')} aria-current="page" href="/landscape"
//                                 >SAP Landscape</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a className={`nav-link mt-2 mx-5 ${activeNavItem === 'statistics' ? 'active' : ''}`}
//                                     onClick={() => handleNavItemClick('statistics')} href="../statistics/index.html" >Statistics</a>
//                             </li>
                            {/* <li class="nav-item">
                                <a className={`nav-link mt-2 mx-5 ${activeNavItem === 'logs' ? 'active' : ''}`}
                                    onClick={() => handleNavItemClick('logs')} href="../logs/index.html">Logs</a>
                            </li>
                            */}
{/* 
                        </ul>
                    </div>
                </div>
            </nav>
        <h1>Download Count: {downloadCount}</h1>
        <h1>Download Share Count: {shareCount}</h1>
        
        </>
          );
 */}
{/* 
export default function App() {
  const [downloadCount, setDownloadCount] = useState(0);
  const [shareCount, setShareCount] = useState(0);

//   useEffect(() => {
//     fetchDownloadCount();
//     fetchShareCount();
//   }, []);


//  
  

  const [activeNavItem, setActiveNavItem] = useState('logs');
  // handle click for nav item
  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light py-0">
        <div className="nav container-fluid">
          <a className="navbar-brand" href="https://www.tysonfoods.com/" target="_blank">
            <img src={h_blue_logo} className="logo img-fluid rounded-top" alt="tyson logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link mt-2 mx-5 ${activeNavItem === 'landscape' ? 'active' : ''}`} onClick={() => handleNavItemClick('landscape')} aria-current="page" href="/landscape">
                  SAP Landscape
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link mt-2 mx-5 ${activeNavItem === 'statistics' ? 'active' : ''}`} onClick={() => handleNavItemClick('statistics')} href="../statistics/index.html">
                  Statistics
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link mt-2 mx-5 ${activeNavItem === 'logs' ? 'active' : ''}`} onClick={() => handleNavItemClick('logs')} href="../logs/index.html">
                  Logs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


 

      <h1>Download Count: {downloadCount}</h1>
      <h1>Share Count: {shareCount}</h1>
    </>
  );
} */}
import Header from "../components/Header";
import h_blue_logo from "../img/h_blue_logo.png"
import h_white_logo from "../img/h_white_logo.png"
import v_blue_logo from "../img/v_blue_logo.png"
import v_white_logo from "../img/v_white_logo.png"
import profile_logo from "../img/profile.png"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/Home.css'
import { useEffect, useState } from "react";
import '../components/Home'
// import { useEffect } from 'react';
import axios from 'axios';
export default function App({downloadCount, shareCount}) {
    const [activeNavItem, setActiveNavItem] = useState('logs');
    // handle click for nav item
    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);

        
    };

    console.log(downloadCount);
    console.log(shareCount);

  return (
        <>
      <nav class="nav navbar navbar-expand-lg navbar-light bg-light py-0">
                <div class="nav container-fluid">
                    <a class="navbar-brand" href="https://www.tysonfoods.com/" target="_blank"> <img src={h_blue_logo} class="logo img-fluid rounded-top" alt="tyson logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a  className={`nav-link mt-2 mx-5 ${activeNavItem === 'landscape' ? 'active' : ''}`}
            onClick={() => handleNavItemClick('landscape')} aria-current="page" href="/landscape"
                                >SAP Landscape</a>
                            </li>
                            <li class="nav-item">
                                <a className={`nav-link mt-2 mx-5 ${activeNavItem === 'statistics' ? 'active' : ''}`}
                                    onClick={() => handleNavItemClick('statistics')} href="../statistics/index.html" >Statistics</a>
                            </li>
                            <li class="nav-item">
                                <a className={`nav-link mt-2 mx-5 ${activeNavItem === 'logs' ? 'active' : ''}`}
                                    onClick={() => handleNavItemClick('logs')} href="../logs/index.html">Logs</a>
                            </li>
                           

                        </ul>
                    </div>
                </div>
            </nav>
        <h1>Download Count: {downloadCount}</h1>
        <h1>Download Share Count: {shareCount}</h1>
        {/* <h1>shared by email Count: {countsend}</h1> */}
        </>
          );
}