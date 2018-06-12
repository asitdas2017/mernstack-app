import React, { Component } from "react";
import mernstack from '../../images/mern.jpg';
import mongoDB from '../../images/mongodb.jpg';
import expressJS from '../../images/express.jpg';
import reactredux from '../../images/react.jpg';
import nodeJS from '../../images/node.jpg';

export default class Landing extends Component {
  render() {
    return (   
      <div>     
        <div className="landingBanner">
          <h2>Getting Started with MERN Stack App</h2>
          <img alt="" src={String(mernstack)} />
          <p>
            This example is a quick exercise to illustrate how the default,
            static and fixed to top navbar work. It includes the responsive
            CSS and HTML, so it also adapts to your viewport and device.
          </p>
        </div>
        <div className="row landingCards">
          <div className="col-lg-3">
            <img alt="mongoDB" src={String(mongoDB)} />
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            
          </div>
          <div className="col-lg-3">
            <img alt="ExpressJS" src={String(expressJS)} />
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            
          </div>
          <div className="col-lg-3">
            <img alt="React/Redux" src={String(reactredux)} />
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
            
          </div>
          <div className="col-lg-3">
            <img alt="NodeJS" src={String(nodeJS)} />
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
            
          </div>
        </div>
      </div>
    );
  }
}
