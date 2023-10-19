import React from 'react';
import CollImg1 from "../images/collection1.png";
import CollImg2 from "../images/collection2.png";
import CollImg3 from "../images/collection3.png";
import CollImg4 from "../images/collection4.png";
import CollImg5 from "../images/collection5.png";
import Topbar from '../components/Topbar';

const Collections = () => {
  return (
    <div>
        <Topbar />
        <div className="collection-hero-section">
            <div className="title">
                <h6 className="body">COLLECTIONS</h6>
            </div>
        </div>
    </div>
  )
}

export default Collections