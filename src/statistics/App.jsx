import React, { useState, useEffect } from 'react';
import h_blue_logo from '../img/h_blue_logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/Home.css';
import axios from 'axios';
// import data from './productData.json';

export default function App() {
  const [activeNavItem, setActiveNavItem] = useState('statistics');
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [systems, setSystems] = useState([]);
  const[data,setData]= useState([]);


  const groupedSystems = {};
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response3 = await axios.get(`https://sapd49.tyson.com/sap/opu/odata/sap/ZAPI_PRDVERS_SRV/SysDetailsSet?sap-client=100`, {
        headers: {

          'Content-Type': 'application/json',

          'Access-Control-Allow-Origin': '*',

          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',

          // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },

        withCredentials: true,
        auth: {
          ususername: 'ANISHO',
          password: 'Lowkey@12345',
        },
      });
        // const response = await fetch('https://api.npoint.io/b27397e82bbf3a321651');
        // setData(response3.data.d.results);
        // console.log(response3.data.d.results);
        // if (response3.ok) {
        //   const data = await response3.data.d.results.json();
          
          // console.log(data);
          response3.data.d.results.forEach((item) => {
            if (!groupedSystems[item.Name]) {
              groupedSystems[item.Name] = [];
            }
          
            // Check if the item already exists in the array before pushing
            const existingItemIndex = groupedSystems[item.Name].findIndex(
              (existingItem) => existingItem.Sysid === item.Sysid
            );
          
            if (existingItemIndex === -1) {
              groupedSystems[item.Name].push(item);
            }
          });
          
          setSystems(groupedSystems);
          
          console.log(groupedSystems);
        // } else {
        //   // console.log(groupedSystems);
        //   console.error('Failed to fetch systems:', response3.status);
        // }
      } catch (error) {
        console.error('Error fetching systems:', error);
      }
    };
      // console.log(groupedSystems);
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
    console.log(timelines);
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
    // console.log(timelines);
    return (
      <div className="timeline-container">
        {timelines.map((timeline, index) => (
          <div className="timeline horizontal reverse" key={index}>
            <div className="timeline-box">
              <div className="block">
                <div className="square up">
                  <h3>{timeline.Sysid}</h3>
                  <h4></h4>
                  <p>
                  <b>Version: {timeline.Inststatus === '-' ? timeline.Version : 'NA'}</b>
                  </p>
                </div>
                <div className="circle">
  {timeline.Inststatus === '-' ? (
    <p>{timeline.ModDate.substring(0, 4)}</p>
  ) : (
    <p>NA</p>
  )}
</div>
                <div className="link"></div>
                <div className="square down blank"></div>
              </div>
              <div className="block">
                <div className="square up blank"></div>
                <div className="circle activated">
                  {timeline.Inststatus==='+' ? ( <p>{timeline.ModDate.substring(0,4)}</p>)
                  :(<p>NA</p>)}
  
                  {/* <p1>{timeline.ModDate}</p1> */}
                </div>
                <div className="link"></div>
                <div className="square down">
                  <h3>{timeline.Sysid}</h3>
                  <p>
                  <b>Version: {timeline.Inststatus === '+' ? timeline.Version : 'NA'}</b>
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
