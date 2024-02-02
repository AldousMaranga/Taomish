import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <html>
        <link rel="stylesheet" href="/assets/css/map.css" type="text/css" />
        <div id="map">
          <div className="min-height p-left d-none d-lg-block map-cont">
            <div className="map-strip">

                <div className="map-div">
                    <div>India</div>
                    <div>Singapore</div>
                    <div>UAE</div>
                </div>
                <img src="/assets/images/map/map-india.png" alt="img" className="img"></img>
            </div>
          </div>

          <div className="small-screen-cont d-lg-none">
            
          </div>

        </div>
      </html>
    );
  }
}
export default Map;
