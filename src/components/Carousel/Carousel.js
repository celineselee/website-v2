import React from "react";
import Slider from "react-slick";
import "./carouselStyles.css";
import { StyledImage } from "./styles";

import l1 from "../../res/images/landing1.jpg";
import l2 from "../../res/images/landing2.jpg";
import l3 from "../../res/images/landing3.jpg";
import l4 from "../../res/images/landing4.jpg";
import l5 from "../../res/images/landing5.jpg";

var settings = {
  autoplay: true,
  dots: true,
  fade: true,
};
class ReactSlickDemo extends React.Component {
  render() {
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <StyledImage src={l1} size="massive" />
          </div>
          <div>
            <StyledImage src={l2} size="massive" />
          </div>
          <div>
            <StyledImage src={l3} size="massive" />
          </div>
          <div>
            <StyledImage src={l4} size="massive" />
          </div>
          <div>
            <StyledImage src={l5} size="massive" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ReactSlickDemo;

// Steps:
// 1. git clone https://github.com/kenwheeler/slick.git
// 2. yarn add react-slick
// 3. yarn add react-resize-detector
// 4. npm install slick-carousel
