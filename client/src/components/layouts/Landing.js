import React, { Component } from "react";
import mernstack from '../../images/mernstack.png';

export default class Landing extends Component {
  render() {
    return (   
      <div>     
        <div className="jumbotron">
          <h2>Getting Started with MERN Stack App</h2>
          <img alt="" src={String(mernstack)} />
          <p>
            This example is a quick exercise to illustrate how the default,
            static and fixed to top navbar work. It includes the responsive
            CSS and HTML, so it also adapts to your viewport and device.
          </p>
        </div>
        <div class="row">
        <div class="col-lg-3">
          <h2>mongoDB</h2>          
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
        </div>
        <div class="col-lg-3">
          <h2>Express</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
       </div>
        <div class="col-lg-3">
          <h2>React/Redux</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
          <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
        </div>
        <div class="col-lg-3">
          <h2>NodeJS</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
          <p><a class="btn btn-primary" href="#" role="button">View details »</a></p>
        </div>
      </div>
      </div>
    );
  }
}
