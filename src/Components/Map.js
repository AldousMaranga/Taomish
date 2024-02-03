import React, { useState, useEffect } from 'react';

function Map() {
  const [activeTab, setActiveTab] = useState('img1');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-img');
    tabContents.forEach((tab) => {
      tab.style.display = 'none';
    });

    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll('.img-btn');
    tabButtons.forEach((button) => {
      button.classList.remove('active');
    });

    // Show the selected tab content
    const activeTabElement = document.getElementById(activeTab);
    if (activeTabElement) {
      activeTabElement.style.display = 'block';
    }

    // Activate the selected tab button
    const activeButton = document.querySelector(`.img-btn[data-tab="${activeTab}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }, [activeTab]);

  return (
    <html>
      <link rel="stylesheet" href="/assets/css/map.css" type="text/css" />
      <div id="map">
        <div className="min-height p-left d-none d-lg-block map-cont">
          <div className="map-strip">

            <div className='title map-title'>Our Presence Worldwide</div>


            <div className="map-div">

              <div className='inner-map-div'>
                <div>
                  <div className='map-header'>India</div>
                  <hr></hr>
                  <div><strong>Bengaluru -</strong> Development Centre - #317, 1st Floor, 6th Main, HAL 2nd Stage, Indiranagar, Bangalore- 560038</div>
                  <hr></hr>
                  <div><strong>Thiruvananthapuram -</strong> Development Centre - Taomish-TVM 1 st floor, Asiatic Business Centre, Near Technopark phase 3 Attinkuzhy(In NH ByPass), Kazhakootam THIRUVANANTHAPURAM, KERALA 695582 India</div>
                  <hr></hr>
                  <button data-tab="img1" onClick={() => openTab('img1')} className='img-btn'>View Map</button>
                </div>
              </div>

              <div className="inner-map-div">
                <div>
                  <div className='map-header'>Singapore</div>
                  <hr></hr>
                  <div><strong>Singapore -</strong> Business/Operation centre - 30 Cecil Street, 05-03 Plus building</div>
                  <hr></hr>
                  <button data-tab="img2" onClick={() => openTab('img2')} className='img-btn'>View Map</button>
                </div>
              </div>



              <div className="inner-map-div">
                <div>
                  <div className='map-header'>UAE</div>
                  <hr></hr>
                  <div><strong>UAE -</strong> Business Center 04/B05-323A, Business Park, PO Box 10055, Ras Al Khaimah, UAE</div>
                  <hr></hr>
                  <button data-tab="img3" onClick={() => openTab('img3')} className='img-btn'>View Map</button>
                </div>
              </div>


            </div>

            <img src="/assets/images/map/map-india.png" alt="img" className="tab-img" id="img1"></img>
            <img src="/assets/images/map/map-singapore.png" alt="img" className="tab-img" id="img2"></img>
            <img src="/assets/images/map/map-uae.png" alt="img" className="tab-img" id="img3"></img>

          </div>
        </div>

        <div className="small-screen-cont d-lg-none"></div>
      </div>
    </html>
  );
}
export default Map;
