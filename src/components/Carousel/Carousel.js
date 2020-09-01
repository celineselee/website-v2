import React from "react";
import { Carousel } from "react-responsive-carousel";

import { Image } from 'semantic-ui-react'

export default () => (
  <Carousel autoPlay >
    <div>
    <Image src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" style={{borderRadius: "30px"}} />
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" style={{borderRadius: "30px"}}  />
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" style={{borderRadius: "30px"}}  />
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" style={{borderRadius: "30px"}}  />
    </div>
  </Carousel>
);